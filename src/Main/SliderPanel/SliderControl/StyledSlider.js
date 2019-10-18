import { Slider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import thumb from './thumb.png';

const StyledSlider = withStyles({
  root: {
    '& .MuiSlider-thumb': {
      width: 30,
      height: 30,
      marginTop: -14,
      marginLeft: -14,
      color: 'transparent',
      backgroundImage: `url(${thumb})`,
      backgroundRepeat: 'no-repeat',
      boxShadow: 'none',
    },
    '& .MuiSlider-rail': {
      height: 12,
      marginTop: -5,
      color: 'rgb(38, 36, 47)',
    },
  },
})(Slider);

export default StyledSlider;
