import React from 'react';
import {dashifyProps} from '../utils';
import { ScaleControl as ReactLeafletScaleControl } from 'react-leaflet';
import {ScaleControlProps as Props} from '../dash-props';

/**
 * A simple scale control that shows the scale of the current center of screen in metric (m/km) and imperial (mi/ft) systems.
 */
const ScaleControl = (props: Props) => {
    return (
        <ReactLeafletScaleControl {...dashifyProps(props)}></ReactLeafletScaleControl>
    )
}

export default ScaleControl;