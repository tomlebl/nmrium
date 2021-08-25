/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useCallback, useRef, useState, useMemo } from 'react';
import * as Yup from 'yup';

import generateNumbersPowerOfX from '../../data/utilities/generateNumbersPowerOfX';
import { useDispatch } from '../context/DispatchContext';
import CheckBox from '../elements/CheckBox';
import CloseButton from '../elements/CloseButton';
import IsotopesViewer from '../elements/IsotopesViewer';
import FormikCheckBox from '../elements/formik/FormikCheckBox';
import FormikErrorsSummary from '../elements/formik/FormikErrorsSummary';
import FormikForm from '../elements/formik/FormikForm';
import FormikInput from '../elements/formik/FormikInput';
import FormikSelect from '../elements/formik/FormikSelect';
import { useAlert } from '../elements/popup/Alert';
import { PREDICT_SPECTRA, SET_LOADING_FLAG } from '../reducer/types/Types';
import { useStateWithLocalStorage } from '../utility/LocalStorage';

import { ModalStyles } from './ModalStyle';

export interface PredictionProps {
  frequency: number;
  '1d': {
    '1H': { from: number; to: number };
    '13C': { from: number; to: number };
    nbPoints: number;
    lineWidth: number;
  };
  '2d': {
    nbPoints: { x: number; y: number };
  };
  spectra: {
    proton: boolean;
    carbon: boolean;
    cosy: boolean;
    hsqc: boolean;
    hmbc: boolean;
  };
}

const styles = css`
  .row {
    align-items: center;
  }

  .inner-content {
    flex: 1;
  }

  .custom-label {
    width: 160px;
    font-weight: 500;
  }

  .nucleus-label {
    padding: 0 10px;
    color: black;
    font-weight: 700;

    &.disabled {
      opacity: 0.5;
      color: black;
    }
  }
  .warning {
    color: #c40000;
    font-weight: bold;
    font-size: 13px;
    text-align: justify;
    margin-top: 30px;
  }

  .warning-container {
    margin-top: 5px;
    display: flex;
    input {
      margin: 5px 5px 5px 0;
    }
  }

  button[disabled],
  button[disabled]:hover {
    opacity: 0.5;
    color: black;
  }

  .middle-x {
    padding: 0 10px;
  }

  .group-label {
    width: 100%;
    display: block;
    border-bottom: 1px solid #efefef;
    padding-bottom: 5px;
    font-weight: 600;
    color: #005d9e;
  }
`;

const FREQUENCIES: Array<{ key: number; value: number; label: string }> = [
  { key: 1, value: 60, label: '60 MHz' },
  { key: 2, value: 100, label: '100 MHz' },
  { key: 3, value: 200, label: '200 MHz' },
  { key: 4, value: 300, label: '300 MHz' },
  { key: 5, value: 400, label: '400 MHz' },
  { key: 6, value: 500, label: '500 MHz' },
  { key: 7, value: 600, label: '600 MHz' },
  { key: 8, value: 800, label: '800 MHz' },
  { key: 9, value: 1000, label: '1000 MHz' },
  { key: 10, value: 1200, label: '1200 MHz' },
];

const NUMBER_OF_POINTS_1D = generateNumbersPowerOfX(12, 19);
const NUMBER_OF_POINTS_2D = generateNumbersPowerOfX(10, 10, {
  format: (value) => value,
});

const INITIAL_VALUE: PredictionProps = {
  frequency: 400,
  '1d': {
    '1H': { from: -1, to: 12 },
    '13C': { from: -5, to: 220 },
    nbPoints: 2 ** 17,
    lineWidth: 1,
  },
  '2d': {
    nbPoints: { x: 1024, y: 1024 },
  },
  spectra: {
    proton: true,
    carbon: false,
    cosy: false,
    hsqc: false,
    hmbc: false,
  },
};

const predictionFormValidation = Yup.object().shape({
  '1d': Yup.object({
    '1H': Yup.object({
      from: Yup.number().integer().required().label("1H ' From ' "),
      to: Yup.number().integer().required().label("1H ' To ' "),
    }),
    '13C': Yup.object().shape({
      from: Yup.number().integer().required().label("13C ' From ' "),
      to: Yup.number().integer().required().label("13C ' To ' "),
    }),
    frequency: Yup.number().integer().required().label('Frequency'),
    lineWidth: Yup.number().integer().min(1).required().label('Line Width'),
    nbPoints: Yup.number().integer().required().label('1D Number Of Points'),
  }),
  '2d': Yup.object({
    nbPoints: Yup.object({
      x: Yup.number().integer().required().label('2D Number Of Points'),
      y: Yup.number().integer().required().label('2D Number Of Points'),
    }),
  }),
  spectra: Yup.object({
    proton: Yup.boolean(),
    carbon: Yup.boolean(),
    cosy: Yup.boolean(),
    hsqc: Yup.boolean(),
    hmbc: Yup.boolean(),
  }).test(
    'check-options',
    'You must check one of the options to start prediction',
    (obj) => {
      if (Object.values(obj).includes(true)) {
        return true;
      }
      return false;
    },
  ),
});

interface PredictSpectraModalProps {
  onClose?: (element?: string) => void;
  molfile: any;
}

function PredictSpectraModal({
  onClose = () => null,
  molfile,
}: PredictSpectraModalProps) {
  const refForm = useRef<any>();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [isApproved, setApproved] = useState(false);
  const [predictionPreferences, setPredictionPreferences] =
    useStateWithLocalStorage('nmrium-prediction-preferences');

  const handleSave = useCallback(() => {
    refForm.current.submitForm();
  }, []);

  const initValues = useMemo(() => {
    const { isApproved: isAgree, ...options } = predictionPreferences;
    setApproved(isAgree);
    return Object.assign(INITIAL_VALUE, options);
  }, [predictionPreferences]);

  const submitHandler = useCallback(
    async (values) => {
      setPredictionPreferences({ ...values, isApproved });
      dispatch({
        type: SET_LOADING_FLAG,
        isLoading: true,
      });

      const predictedSpectra = Object.entries(values.spectra)
        .reduce<Array<string>>((acc, [key, value]) => {
          if (value) {
            acc.push(key);
          }
          return acc;
        }, [])
        .join(' , ');

      const hideLoading = await alert.showLoading(
        `Predict ${predictedSpectra} in progress`,
      );

      dispatch({
        type: PREDICT_SPECTRA,
        payload: { mol: molfile, options: values },
      });

      hideLoading();
      onClose();
    },
    [alert, dispatch, isApproved, molfile, onClose, setPredictionPreferences],
  );

  const approveCheckHandler = useCallback((e) => {
    setApproved(e.target.checked);
  }, []);

  return (
    <div css={[ModalStyles, styles]}>
      <div className="header handle">
        <span>Prediction of NMR spectrum</span>
        <CloseButton onClick={onClose} className="close-bt" />
      </div>
      <div className="inner-content">
        <FormikForm
          ref={refForm}
          initialValues={initValues}
          validationSchema={predictionFormValidation}
          onSubmit={submitHandler}
        >
          <FormikErrorsSummary />

          <div className="row margin-10">
            <span className="custom-label">Spectrometer Frequency :</span>

            <FormikSelect
              data={FREQUENCIES}
              style={{ width: 290, height: 30, margin: 0 }}
              name="frequency"
            />
          </div>

          <span className="group-label">1D Options </span>

          <div className="row margin-10 padding-h-10">
            <IsotopesViewer value="1H" className="custom-label" />
            <FormikInput
              label="From"
              name="1d.1H.from"
              type="number"
              style={{ label: { padding: '0 10px 0 0' } }}
            />
            <FormikInput
              label="To"
              name="1d.1H.to"
              type="number"
              style={{ label: { padding: '0 10px' } }}
            />
          </div>
          <div className="row margin-10 padding-h-10">
            <IsotopesViewer value="13C" className="custom-label" />
            <FormikInput
              label="From"
              name="1d.13C.from"
              type="number"
              style={{ label: { padding: '0 10px 0 0' } }}
            />
            <FormikInput
              label="To"
              name="1d.13C.to"
              type="number"
              style={{ label: { padding: '0 10px' } }}
            />
          </div>
          <div className="row margin-10 padding-h-10">
            <span className="custom-label">Line Width : </span>
            <FormikInput
              name="1d.lineWidth"
              type="number"
              style={{ input: { margin: 0 } }}
            />
            <span style={{ paddingLeft: '0.4rem' }}> Hz </span>
          </div>
          <div className="row margin-10 padding-h-10">
            <span className="custom-label">Number of Points : </span>
            <FormikSelect
              data={NUMBER_OF_POINTS_1D}
              name="1d.nbPoints"
              style={{ width: 290, height: 30, margin: 0 }}
            />
          </div>
          <span className="group-label">2D Options </span>

          <div className="row margin-10 padding-h-10">
            <span className="custom-label">Number of Points : </span>
            <FormikSelect
              data={NUMBER_OF_POINTS_2D}
              name="2d.nbPoints.x"
              style={{ margin: 0, height: 30 }}
            />
            <span className="middle-x"> X </span>
            <FormikSelect
              data={NUMBER_OF_POINTS_2D}
              name="2d.nbPoints.y"
              style={{ margin: 0, height: 30 }}
            />
          </div>
          <div className="row margin-10">
            <span className="group-label">Spectra </span>
          </div>
          <div
            className="row margin-10 padding-h-10"
            style={{ justifyContent: 'space-between' }}
          >
            <div className="row">
              <FormikCheckBox name="spectra.proton" />
              <IsotopesViewer value="1H" className="nucleus-label" />
            </div>
            <div className="row">
              <FormikCheckBox name="spectra.carbon" />
              <IsotopesViewer value="13C" className="nucleus-label" />
            </div>
            <div className="row">
              <FormikCheckBox name="spectra.cosy" />
              <IsotopesViewer value="COSY" className="nucleus-label" />
            </div>
            <div className="row">
              <FormikCheckBox name="spectra.hsqc" />
              <IsotopesViewer value="HSQC" className="nucleus-label" />
            </div>
            <div className="row">
              <FormikCheckBox name="spectra.hmbc" />
              <IsotopesViewer value="HMBC" className="nucleus-label" />
            </div>
          </div>
        </FormikForm>
        <p className="warning">
          In order to predict spectra we are calling an external service and the
          chemical structure will leave your browser! You should never predict
          spectra for confidential molecules.
        </p>
        <div className="warning-container">
          <CheckBox
            onChange={approveCheckHandler}
            checked={isApproved}
            key={String(isApproved)}
          />
          <p>I confirm that the chemical structure is not confidential.</p>
        </div>
      </div>
      <div className="footer-container">
        <button
          type="button"
          onClick={handleSave}
          className="btn"
          disabled={!isApproved}
        >
          Predict spectrum
        </button>
      </div>
    </div>
  );
}

export default PredictSpectraModal;
