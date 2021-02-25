import { Draft } from 'immer';
import lodashGet from 'lodash/get';
import { CorrelationManager } from 'nmr-correlation';

import { addJcamps, addJDFs } from '../../../data/SpectraManager';
import * as MoleculeManager from '../../../data/molecules/MoleculeManager';
import generateID from '../../../data/utilities/generateID';
import { State } from '../Reducer';

import { changeSpectrumDisplayPreferences } from './PreferencesActions';
import { setYAxisShift, setActiveTab } from './ToolsActions';
import { initZoom1DHandler } from './Zoom';

function setIsLoading(draft, isLoading) {
  draft.isLoading = isLoading;
}

function setData(draft: Draft<State>, data) {
  const {
    spectra,
    molecules,
    preferences,
    correlations,
    // multipleAnalysis,
  } = data || {
    spectra: [],
    molecules: [],
    preferences: {},
    correlations: {},
    multipleAnalysis: {},
  };
  draft.data = spectra;
  draft.molecules = MoleculeManager.fromJSON(molecules);
  draft.preferences = preferences;
  if (correlations) {
    draft.correlations = CorrelationManager.init(correlations);
  }

  // const spectraAnalysis = AnalysisObj.getMultipleAnalysis();
}

function initiate(draft: Draft<State>, action) {
  draft.displayerKey = generateID();
  setData(draft, action.payload);
  initZoom1DHandler(draft.data);
  const alignCenter = lodashGet(draft.preferences, 'display.center', null);
  if (alignCenter) {
    changeSpectrumDisplayPreferences(draft, {
      center: alignCenter,
    });
  } else {
    setYAxisShift(draft, draft.height);
  }
  setActiveTab(draft);
  draft.isLoading = false;
}

function loadJDFFile(draft: Draft<State>, files) {
  const spectra = addJDFs(files);
  for (const spectrum of spectra) {
    draft.data.push(spectrum);
  }

  setActiveTab(draft);
  initZoom1DHandler(draft.data);

  draft.isLoading = false;
}

function loadJcampFile(draft: Draft<State>, files) {
  const spectra = addJcamps(files);
  for (const spectrum of spectra) {
    draft.data.push(spectrum);
  }
  setActiveTab(draft);
  initZoom1DHandler(draft.data);

  draft.isLoading = false;
}

function handleLoadJsonFile(draft: Draft<State>, files) {
  const data = JSON.parse(files[0].binary.toString());
  setData(draft, data);
  const alignCenter = lodashGet(draft.preferences, 'display.center', null);

  if (alignCenter) {
    changeSpectrumDisplayPreferences(draft, {
      center: alignCenter,
    });
  } else {
    setYAxisShift(draft, draft.height);
  }

  setActiveTab(draft);
  initZoom1DHandler(draft.data);

  draft.isLoading = false;
}

function handleLoadMOLFile(draft: Draft<State>, files) {
  for (let file of files) {
    MoleculeManager.addMolfile(draft.molecules, file.binary.toString());
  }
  draft.isLoading = false;
}

function handleLoadZIPFile(draft: Draft<State>, action) {
  draft.data = action.payload;
  setActiveTab(draft);
  initZoom1DHandler(draft.data);
  draft.isLoading = false;
}

export {
  setIsLoading,
  initiate,
  loadJcampFile,
  loadJDFFile,
  handleLoadJsonFile,
  handleLoadMOLFile,
  handleLoadZIPFile,
};
