import { scaleLinear, zoomIdentity } from 'd3';

function getXScale(state, spectrumId: number | null | string = null) {
  const { width, margin, xDomains, xDomain, mode } = state;
  const range =
    mode === 'RTL'
      ? [width - margin.right, margin.left]
      : [margin.left, width - margin.right];
  return scaleLinear(spectrumId ? xDomains[spectrumId] : xDomain, range);
}

function getYScale(state, spectrumId: number | null | string = null) {
  const { height, margin, verticalAlign, yDomain, yDomains } = state;
  const _height =
    verticalAlign.flag && !verticalAlign.stacked
      ? (height - 30) / 2
      : height - margin.bottom - 30;

  let domainY: [number, number] | [] = [];
  if (spectrumId === null || yDomains[spectrumId] === undefined) {
    domainY = [0, yDomain[1]];
  } else {
    domainY = [0, yDomains[spectrumId][1]];
  }
  return scaleLinear(domainY, [_height, margin.top]);
}

function getIntegralYScale(state, spectrumId) {
  const { height, margin, verticalAlign, integralsYDomains } = state;
  const _height =
    verticalAlign.flag && !verticalAlign.stacked ? height / 2 : height;

  return scaleLinear(integralsYDomains[spectrumId], [
    _height - (margin.bottom + _height * 0.3),
    margin.top,
  ]);
}

function reScaleY(scale: number, { domain, height, margin }) {
  const _scale = scaleLinear(domain, [height - margin.bottom, margin.top]);

  const t = zoomIdentity
    .translate(0, _scale(0))
    .scale(scale)
    .translate(0, -_scale(0));

  return t.rescaleY(_scale).domain();
}

export { getXScale, getYScale, getIntegralYScale, reScaleY };
