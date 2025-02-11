import Label from '../../elements/Label';
import FormikInput from '../../elements/formik/FormikInput';

function ControllersTabContent() {
  return (
    <>
      <p className="section-header">Spectra</p>
      <Label
        title="Transparency of Dimmed Spectra [ 0 - 1 ]"
        // style={{ label: styles.inputLabel, wrapper: styles.inputWrapper }}
      >
        <FormikInput
          name="controllers.dimmedSpectraTransparency"
          checkValue={(value) => value >= 0 && value <= 1}
          type="number"
        />
      </Label>
    </>
  );
}

export default ControllersTabContent;
