import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhoneMissedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneMissedSharpFilled'
      short_name='PhoneMissed'

      {...props}
    >
      <path d="M4.025 21 0.4 17.475Q2.75 14.725 5.75 13.363Q8.75 12 12 12Q15.25 12 18.238 13.363Q21.225 14.725 23.6 17.475L19.975 21L16 18V14.65Q15.05 14.35 14.05 14.175Q13.05 14 12 14Q10.95 14 9.95 14.175Q8.95 14.35 8 14.65V18ZM12 11.4 7.05 6.45V9.05H5.05V3.05H11.05V5.05H8.45L11.975 8.575L17.625 2.925L19.05 4.35Z"/>
    </Icon>
  );
});

IconMaterialPhoneMissedSharpFilled.displayName = 'AmauiIconMaterialPhoneMissedSharpFilled';

export default IconMaterialPhoneMissedSharpFilled;
