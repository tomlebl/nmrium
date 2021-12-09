/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useFormikContext } from 'formik';
import { useCallback, useState, useEffect, useMemo } from 'react';

import getAtom from '../../../data/utilities/getAtom';
import { useChartData } from '../../context/ChartContext';
import MoleculeSelection from '../../elements/MoleculeSelection';

const styles = css`
  .molecule-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    .title {
      padding: 0px 10px;
      width: 100%;
      text-align: center;
    }

    .molecule-selection-container {
      width: 450px;
      display: block;
      margin: 0 auto;
    }

    .newSumText {
      margin-top: 15px;
      padding: 0px 10px;
      width: 100%;

      text-align: center;
    }
  }

  .empty {
    width: 100%;
    padding: 20%;
    text-align: center;
  }
`;

interface SelectMoleculeProps {
  name: string;
}

export default function SelectMolecule(props: SelectMoleculeProps) {
  const [currentIndex, setCurrentIndex] = useState<number>();
  const { setFieldValue, errors } = useFormikContext();
  const { molecules, activeTab } = useChartData();
  const element = getAtom(activeTab);
  const newSum = useMemo(() => {
    return element &&
      molecules &&
      molecules.length > 0 &&
      currentIndex !== undefined &&
      molecules[currentIndex].atoms[element]
      ? molecules[currentIndex].atoms[element]
      : 0;
  }, [currentIndex, element, molecules]);

  const setValue = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      const { mf, key } = molecules[index];
      setFieldValue(props.name, { value: mf, moleculeKey: key });
    },
    [molecules, props.name, setFieldValue],
  );

  useEffect(() => {
    if (molecules && molecules.length > 0) {
      setValue(0);
    }
  }, [molecules, setValue]);

  const onChangeMoleculeSelectionHandler = useCallback(
    (index) => {
      setValue(index);
    },
    [setValue],
  );

  return (
    <div css={styles}>
      {element && molecules && molecules.length > 0 ? (
        <div className="molecule-container">
          <p className="title">Select a molecule as reference!</p>

          <div className="molecule-selection-container">
            <MoleculeSelection
              molecules={molecules}
              onChange={onChangeMoleculeSelectionHandler}
            />
            <p className="newSumText">
              New sum for {element} will be {newSum}!
            </p>
          </div>
        </div>
      ) : (
        <p
          className="empty"
          style={{ color: errors[props.name] ? 'red' : 'black' }}
        >
          Add a molecule first from Structure panel to select as a reference!
        </p>
      )}
    </div>
  );
}
