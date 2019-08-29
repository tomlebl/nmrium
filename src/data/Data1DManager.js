// import applyFilter from './filter1d/filter';
import { convert } from 'jcampconverter';
import { Datum1D } from './Datum1D';
import { XY, XReIm } from 'ml-spectra-processing';
import { getMetaData } from './metadata/getMetaData';
export class Data1DManager {
  static fromJSON = async function fromJSON(json = []) {
    let data1D = [];
    for (let i = 0; i < json.length; i++) {
      const datum = json[i];

      if (datum.source.jcamp != null) {
        const datumObject = Data1DManager.fromJcamp(datum.source.jcamp, datum);
        data1D.push(datumObject);
      } else if (datum.source.jcampURL != null) {
        const jcamp = await Data1DManager.loadFileFromURL(
          datum.source.jcampURL,
        );
        const datumObject = Data1DManager.fromJcamp(jcamp, datum);
        data1D.push(datumObject);
      } else {
        data1D.push(new Datum1D(datum));
      }
    }

    return data1D;
  };

  static loadFileFromURL = async function loadFileFromURL(Url) {
    return await fetch(Url)
      .then(
        (response) => Data1DManager.checkStatus(response) && response.text(),
      )
      .catch((err) => {
        console.error(err);
      });
  };

  static checkStatus(response) {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }
    return response;
  }

  static fromJcamp = function fromJcamp(text, options = {}) {
    // name,
    // color,
    // isVisible,
    // isPeaksMarkersVisible
    let result = convert(text, { xy: true, keepRecordsRegExp: /.*/ });

    let x =
      result.spectra[0] &&
      result.spectra[0].data &&
      result.spectra[0].data[0] &&
      result.spectra[0].data[0].x
        ? result.spectra[0].data[0].x
        : [];
    let re =
      result.spectra[0] &&
      result.spectra[0].data &&
      result.spectra[0].data[0] &&
      result.spectra[0].data[0].y
        ? result.spectra[0].data[0].y
        : [];
    let im =
      result.spectra[1] &&
      result.spectra[1].data &&
      result.spectra[1].data[0] &&
      result.spectra[1].data[0].y
        ? result.spectra[1].data[0].y
        : new Array(re.length);
    // 2 cases. We have real and imaginary part of only real

    let data = im ? XReIm.sortX({ x, re, im }) : XY.sortX({ x, re });

    let meta = getMetaData(result.info);

    if (Array.isArray(meta.nucleus)) meta.nucleus = meta.nucleus[0];
    const ob = new Datum1D({ ...options, info: meta, data });

    return ob;
  };
}
