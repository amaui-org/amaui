import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneMissedSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedSharp'
      short_name='PhoneMissed'

      {...props}
    >
      <path d="M4.025 21 0.4 17.475Q2.75 14.725 5.75 13.363Q8.75 12 12 12Q15.25 12 18.238 13.363Q21.225 14.725 23.6 17.475L19.975 21L16 18V14.65Q15.05 14.35 14.05 14.175Q13.05 14 12 14Q10.95 14 9.95 14.175Q8.95 14.35 8 14.65V18ZM4.2 18.4 6 17V15.45Q5.275 15.825 4.6 16.312Q3.925 16.8 3.2 17.4ZM19.8 18.4 20.8 17.45Q20.075 16.8 19.4 16.325Q18.725 15.85 18 15.5V17ZM11.95 11.4 7 6.45V9.05H5V3.05H11V5.05H8.4L11.925 8.575L17.575 2.925L19 4.35ZM18 15.5Q18 15.5 18 15.5Q18 15.5 18 15.5ZM6 15.45Q6 15.45 6 15.45Q6 15.45 6 15.45Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedSharp.displayName = 'AmauiIconMaterialPhoneMissedSharp';

export default IconMaterialPhoneMissedSharp;
