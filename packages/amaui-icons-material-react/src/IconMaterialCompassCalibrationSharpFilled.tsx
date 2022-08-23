import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompassCalibrationSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibrationSharpFilled'
      short_name='CompassCalibration'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.463 20.538Q7 19.075 7 17Q7 14.925 8.463 13.462Q9.925 12 12 12Q14.075 12 15.538 13.462Q17 14.925 17 17Q17 19.075 15.538 20.538Q14.075 22 12 22ZM7 12.15 2 7.15Q4 5.15 6.588 4.075Q9.175 3 12 3Q14.825 3 17.413 4.075Q20 5.15 22 7.15L17 12.15Q15.975 11.125 14.7 10.562Q13.425 10 12 10Q10.575 10 9.3 10.562Q8.025 11.125 7 12.15Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationSharpFilled.displayName = 'AmauiIconMaterialCompassCalibrationSharpFilled';

export default IconMaterialCompassCalibrationSharpFilled;
