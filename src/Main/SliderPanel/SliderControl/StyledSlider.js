import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import green from './thumb-green.png';
import gray from './thumb-gray.png';

const StyledSlider = withStyles({
  root: {
    '& .MuiSlider-thumb': {
      width: 30,
      height: 30,
      marginTop: -14,
      marginLeft: -14,
      color: 'transparent',
      backgroundImage: `url(${green})`,
      backgroundSize: 'contain',
      boxShadow: 'none',
    },
    '&.Mui-disabled .MuiSlider-thumb': {
      backgroundImage: `url(${gray})`,
    },
    '& .MuiSlider-rail': {
      height: 12,
      marginTop: -5,
      color: 'rgb(38, 36, 47)',
    },
  },
})(Slider);

export default StyledSlider;
