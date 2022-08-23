import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCompassCalibrationSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CompassCalibrationSharp'
      short_name='CompassCalibration'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.463 20.538Q7 19.075 7 17Q7 14.925 8.463 13.462Q9.925 12 12 12Q14.075 12 15.538 13.462Q17 14.925 17 17Q17 19.075 15.538 20.538Q14.075 22 12 22ZM12 20Q13.25 20 14.125 19.125Q15 18.25 15 17Q15 15.75 14.125 14.875Q13.25 14 12 14Q10.75 14 9.875 14.875Q9 15.75 9 17Q9 18.25 9.875 19.125Q10.75 20 12 20ZM7 12.15 2 7.15Q4 5.15 6.588 4.075Q9.175 3 12 3Q14.825 3 17.413 4.075Q20 5.15 22 7.15L17 12.15Q15.975 11.125 14.7 10.562Q13.425 10 12 10Q10.575 10 9.3 10.562Q8.025 11.125 7 12.15ZM7.15 9.5Q8.2 8.75 9.438 8.375Q10.675 8 12 8Q13.325 8 14.538 8.363Q15.75 8.725 16.85 9.45L19.05 7.25Q17.5 6.15 15.713 5.575Q13.925 5 12 5Q10.075 5 8.288 5.575Q6.5 6.15 4.95 7.25ZM12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8Q12 8 12 8ZM12 17Q12 17 12 17Q12 17 12 17Q12 17 12 17Q12 17 12 17Q12 17 12 17Q12 17 12 17Q12 17 12 17Q12 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialCompassCalibrationSharp.displayName = 'AmauiIconMaterialCompassCalibrationSharp';

export default IconMaterialCompassCalibrationSharp;
