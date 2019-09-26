import React, { useContext, useEffect, useState } from 'react';

import { useChartData } from '../context/ChartContext';
import { MouseContext } from '../EventsTrackers/MouseTracker';
import { BrushContext } from '../EventsTrackers/BrushTracker';
import { options } from '../toolbar/FunctionToolBar';

const styles = {
  radius: 10,
  borderColor: 'red',
  strokeWidth: 1,
  fillOpacity: 0,
};

const PeakPointer = () => {
  const {
    height,
    width,
    margin,
    activeSpectrum,
    getScale,
    data,
    mode,
    selectedTool,
  } = useChartData();
  let position = useContext(MouseContext);
  const brushState = useContext(BrushContext);
  const [closePeakPosition, setPosition] = useState();

  useEffect(() => {
    const getClosePeak = (xShift, mouseCoordinates) => {
      if (
        activeSpectrum &&
        position &&
        selectedTool === options.peakPicking.id
      ) {
        const scale = getScale(activeSpectrum.id);

        const zoon = [
          scale.x.invert(mouseCoordinates.x - xShift),
          scale.x.invert(mouseCoordinates.x + xShift),
        ].sort();

        //get the active sepectrum data by looking for it by id
        const spectrumData = data.find((d) => d.id === activeSpectrum.id);

        const maxIndex =
          spectrumData.x.findIndex((number) => number >= zoon[1]) - 1;
        const minIndex = spectrumData.x.findIndex(
          (number) => number >= zoon[0],
        );

        const yDataRange = spectrumData.y.slice(minIndex, maxIndex);

        const yValue = Math.max.apply(null, yDataRange);
        const xIndex = yDataRange.findIndex((value) => value === yValue);
        const xValue = spectrumData.x[minIndex + xIndex];

        return {
          x: scale.x(xValue),
          y: scale.y(yValue),
          xIndex: minIndex + xIndex,
        };
      }
      return null;
    };

    const candidatePeakPosition = getClosePeak(10, position);
    setPosition(candidatePeakPosition);
  }, [activeSpectrum, data, getScale, mode, position, selectedTool]);

  if (
    selectedTool !== options.peakPicking.id ||
    !closePeakPosition ||
    !activeSpectrum ||
    brushState.step === 'brushing' ||
    !position ||
    position.y < margin.top ||
    position.left < margin.left ||
    position.x > width - margin.right ||
    position.y > height - margin.bottom
  ) {
    return null;
  }

  return (
    <div
      key="peakPointer"
      style={{
        cursor: 'crosshair',
        transform: `translate(${closePeakPosition.x}px, ${closePeakPosition.y}px)`,
        transformOrigin: 'top left',
        position: 'absolute',
        top: -styles.radius,
        left: -styles.radius,
        pointerEvents: 'none',
        overflow: 'visible',
      }}
    >
      <svg width={styles.radius * 2} height={styles.radius * 2}>
        <circle
          cx={styles.radius}
          cy={styles.radius}
          r={styles.radius}
          stroke={styles.borderColor}
          strokeWidth={styles.strokeWidth}
          fillOpacity={styles.fillOpacity}
        />
        <line
          x1={styles.radius}
          y1="0"
          x2={styles.radius}
          y2={styles.radius * 2}
          stroke={styles.borderColor}
          strokeWidth={styles.strokeWidth}
        />
        <line
          x1="0"
          y1={styles.radius}
          x2={styles.radius * 2}
          y2={styles.radius}
          stroke={styles.borderColor}
          strokeWidth={styles.strokeWidth}
        />
      </svg>
    </div>
  );
};

export default PeakPointer;
