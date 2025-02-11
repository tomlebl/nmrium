import { extent } from 'd3';
import { rangesToXY } from 'nmr-processing';

import { Datum1D } from '../../data/types/data1d';
import { useChartData } from '../context/ChartContext';
import { useScaleChecked } from '../context/ScaleContext';
import { HighlightedSource, useHighlightData } from '../highlight';
import useSpectrum from '../hooks/useSpectrum';

import { getYScale } from './utilities/scale';

const emptyData = { info: { originFrequency: 400 } };

function ResurrectedDatabaseRanges() {
  const { displayerKey, verticalAlign, height, margin } = useChartData();
  const { info } = useSpectrum(emptyData) as Datum1D;
  const { highlight } = useHighlightData();
  const { scaleX } = useScaleChecked();

  if (highlight.sourceData?.type !== HighlightedSource.DATABASE) {
    return null;
  }

  const fullHeight = height - margin.bottom;
  const blockHight = fullHeight / 4;

  const { ranges } = highlight.sourceData.extra || [];

  let yDomain: any[] = [0, 0];

  const spectra = ranges.map((range) => {
    const { from, to } = range;
    const diff = Math.abs(from - to) / 2;
    const newForm = from - diff;
    const newTo = to + diff;
    const data = rangesToXY([range], {
      frequency: info.originFrequency,
      from: newForm,
      to: newTo,
      nbPoints: 256,
    });
    //calculate y domain
    const domain = extent(data.y) as number[];
    yDomain[0] = domain[0] < yDomain[0] ? domain[0] : yDomain[0];
    yDomain[1] = domain[1] > yDomain[1] ? domain[1] : yDomain[1];

    return { data, from: newForm, to: newTo };
  }, []);

  const scaleY = getYScale({
    height: blockHight,
    margin: { top: 0, bottom: 0 },
    verticalAlign,
    yDomain,
  });

  const paths = spectra.map(({ data: { x, y }, from, to }) => {
    let path = `M ${scaleX()(x[0])} ${scaleY(y[0])} `;
    path += x.slice(1).reduce((accumulator, point, i) => {
      accumulator += ` L ${scaleX()(point)} ${scaleY(y[i + 1])}`;
      return accumulator;
    }, '');
    return { path, from, to };
  }, []);

  return (
    <g
      clipPath={`url(#${displayerKey}clip-chart-1d)`}
      className="resurrected-database-ranges"
      width="100%"
      height="100%"
    >
      {paths.map(({ path, from, to }, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <g key={`${index}`}>
          <g transform={`translate(${scaleX()(to)},0)`}>
            <rect
              x="0"
              width={Math.abs(scaleX()(to) - scaleX()(from))}
              height="100%"
              fill="#ff6f0057"
            />
          </g>
          <path
            transform={`translate(0,${fullHeight - blockHight * 2})`}
            stroke="black"
            fill="none"
            d={path}
          />
        </g>
      ))}
    </g>
  );
}

export default ResurrectedDatabaseRanges;
