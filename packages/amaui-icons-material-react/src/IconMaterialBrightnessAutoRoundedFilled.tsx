import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrightnessAutoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrightnessAutoRoundedFilled'
      short_name='BrightnessAuto'

      {...props}
    >
      <path d="M10.925 7.75 8.175 14.975Q8.025 15.325 8.25 15.662Q8.475 16 8.875 16Q9.125 16 9.312 15.863Q9.5 15.725 9.575 15.5L10.2 13.7H13.85L14.475 15.525Q14.55 15.75 14.738 15.875Q14.925 16 15.15 16Q15.525 16 15.738 15.688Q15.95 15.375 15.825 15.025L13.075 7.75Q12.95 7.4 12.65 7.2Q12.35 7 12 7Q11.65 7 11.35 7.2Q11.05 7.4 10.925 7.75ZM10.65 12.4 11.95 8.65H12.05L13.35 12.4ZM8.65 20H6Q5.175 20 4.588 19.413Q4 18.825 4 18V15.35L2.075 13.4Q1.5 12.825 1.5 12Q1.5 11.175 2.075 10.6L4 8.65V6Q4 5.175 4.588 4.588Q5.175 4 6 4H8.65L10.6 2.075Q11.175 1.5 12 1.5Q12.825 1.5 13.4 2.075L15.35 4H18Q18.825 4 19.413 4.588Q20 5.175 20 6V8.65L21.925 10.6Q22.5 11.175 22.5 12Q22.5 12.825 21.925 13.4L20 15.35V18Q20 18.825 19.413 19.413Q18.825 20 18 20H15.35L13.4 21.925Q12.825 22.5 12 22.5Q11.175 22.5 10.6 21.925Z"/>
    </Icon>
  );
});

IconMaterialBrightnessAutoRoundedFilled.displayName = 'AmauiIconMaterialBrightnessAutoRoundedFilled';

export default IconMaterialBrightnessAutoRoundedFilled;
