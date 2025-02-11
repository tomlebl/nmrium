import { Draft } from 'immer';

import * as MultipleAnalysis from '../../../data/data1d/MultipleAnalysis';
import { State } from '../Reducer';
import getRange from '../helper/getRange';

function analyzeSpectra(draft: Draft<State>, action) {
  const [from, to] = getRange(draft, action);
  MultipleAnalysis.analyzeSpectra(draft.data, draft.spectraAnalysis, {
    from,
    to,
    nucleus: draft.activeTab,
  });
}

function handleDeleteSpectraRanges(draft: Draft<State>, action) {
  const { colKey } = action;

  MultipleAnalysis.deleteSpectraAnalysis(
    draft.spectraAnalysis,
    colKey,
    draft.activeTab,
  );
}
function handleResizeSpectraRange(draft: Draft<State>, action) {
  const { columnKey, from, to } = action.payload;
  MultipleAnalysis.analyzeSpectra(draft.data, draft.spectraAnalysis, {
    from,
    to,
    nucleus: draft.activeTab,
    columnKey,
  });
}
function handleSetColumns(draft: Draft<State>, action) {
  const data = action.payload;

  MultipleAnalysis.setColumn(draft.spectraAnalysis, draft.activeTab, data);
}
function handleFilterColumn(draft: Draft<State>, action) {
  const { columnKey, valueKey } = action.payload;

  MultipleAnalysis.changeColumnValueKey(
    draft.spectraAnalysis,
    draft.activeTab,
    columnKey,
    valueKey,
  );
}

export {
  analyzeSpectra,
  handleDeleteSpectraRanges,
  handleResizeSpectraRange,
  handleSetColumns,
  handleFilterColumn,
};
