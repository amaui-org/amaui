import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompassCalibrationRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibrationRoundedFilled'
      short_name='CompassCalibration'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.463 20.538Q7 19.075 7 17Q7 14.925 8.463 13.462Q9.925 12 12 12Q14.075 12 15.538 13.462Q17 14.925 17 17Q17 19.075 15.538 20.538Q14.075 22 12 22ZM6.275 11.425 2.725 7.875Q2.425 7.575 2.438 7.162Q2.45 6.75 2.75 6.475Q4.675 4.8 7.05 3.9Q9.425 3 12 3Q14.575 3 16.95 3.9Q19.325 4.8 21.25 6.475Q21.55 6.75 21.562 7.162Q21.575 7.575 21.275 7.875L17.725 11.425Q17.45 11.7 17.025 11.725Q16.6 11.75 16.25 11.475Q15.325 10.75 14.25 10.375Q13.175 10 12 10Q10.825 10 9.75 10.375Q8.675 10.75 7.75 11.475Q7.4 11.75 6.975 11.725Q6.55 11.7 6.275 11.425Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationRoundedFilled.displayName = 'AmauiIconMaterialCompassCalibrationRoundedFilled';

export default IconMaterialCompassCalibrationRoundedFilled;
