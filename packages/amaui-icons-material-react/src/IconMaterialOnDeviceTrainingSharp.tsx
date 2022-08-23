import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOnDeviceTrainingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OnDeviceTrainingSharp'
      short_name='OnDeviceTraining'

      {...props}
    >
      <path d="M11 17V16H13V17ZM11 15.5V14.725Q10.525 14.45 10.262 13.987Q10 13.525 10 13Q10 12.175 10.588 11.587Q11.175 11 12 11Q12.825 11 13.413 11.587Q14 12.175 14 13Q14 13.525 13.738 13.987Q13.475 14.45 13 14.725V15.5ZM16 15.95 14.95 14.875Q15.225 14.45 15.363 13.975Q15.5 13.5 15.5 13Q15.5 12.5 15.363 12.025Q15.225 11.55 14.95 11.125L16 10.05Q16.5 10.7 16.75 11.45Q17 12.2 17 13Q17 13.8 16.75 14.55Q16.5 15.3 16 15.95ZM8 15.95Q7.5 15.3 7.25 14.55Q7 13.8 7 13Q7 10.925 8.463 9.462Q9.925 8 12 8V6.75L14.25 8.75L12 10.75V9.5Q10.55 9.5 9.525 10.525Q8.5 11.55 8.5 13Q8.5 13.5 8.637 13.975Q8.775 14.45 9.05 14.875ZM4 23V1H20V23ZM6 18H18V6H6ZM6 20V21H18V20ZM6 4H18V3H6ZM6 3V4ZM6 21V20Z"/>
    </Icon>
  );
});

IconMaterialOnDeviceTrainingSharp.displayName = 'AmauiIconMaterialOnDeviceTrainingSharp';

export default IconMaterialOnDeviceTrainingSharp;
