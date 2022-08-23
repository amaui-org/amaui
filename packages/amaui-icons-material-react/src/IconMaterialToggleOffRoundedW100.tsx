import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialToggleOffRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToggleOffRoundedW100'
      short_name='ToggleOff'

      {...props}
    >
      <path d="M7 16.7Q5.05 16.7 3.675 15.325Q2.3 13.95 2.3 12Q2.3 10.05 3.675 8.675Q5.05 7.3 7 7.3H17Q18.95 7.3 20.325 8.675Q21.7 10.05 21.7 12Q21.7 13.95 20.325 15.325Q18.95 16.7 17 16.7ZM7 16H17Q18.65 16 19.825 14.825Q21 13.65 21 12Q21 10.35 19.825 9.175Q18.65 8 17 8H7Q5.35 8 4.175 9.175Q3 10.35 3 12Q3 13.65 4.175 14.825Q5.35 16 7 16ZM7 14.35Q7.975 14.35 8.662 13.662Q9.35 12.975 9.35 12Q9.35 11.025 8.662 10.337Q7.975 9.65 7 9.65Q6.025 9.65 5.338 10.337Q4.65 11.025 4.65 12Q4.65 12.975 5.338 13.662Q6.025 14.35 7 14.35ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialToggleOffRoundedW100.displayName = 'AmauiIconMaterialToggleOffRoundedW100';

export default IconMaterialToggleOffRoundedW100;
