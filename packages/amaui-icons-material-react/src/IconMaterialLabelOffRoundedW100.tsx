import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLabelOffRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabelOffRoundedW100'
      short_name='LabelOff'

      {...props}
    >
      <path d="M16.75 15.7 16.25 15.2 18.55 12 15.45 7.65Q15.225 7.3 14.9 7.15Q14.575 7 14.15 7H8L7.3 6.3H14.2Q14.725 6.3 15.238 6.562Q15.75 6.825 16.05 7.25L18.775 11.125Q19.05 11.525 19.05 12Q19.05 12.475 18.775 12.875ZM5.8 17.7Q5.15 17.7 4.725 17.275Q4.3 16.85 4.3 16.2V7.8Q4.3 7.675 4.325 7.512Q4.35 7.35 4.4 7.2L2.65 5.45Q2.525 5.325 2.525 5.2Q2.525 5.075 2.65 4.95Q2.775 4.825 2.9 4.825Q3.025 4.825 3.15 4.95L18.55 20.35Q18.675 20.475 18.675 20.6Q18.675 20.725 18.55 20.85Q18.425 20.975 18.3 20.975Q18.175 20.975 18.05 20.85L14.8 17.6Q14.725 17.65 14.538 17.675Q14.35 17.7 14.2 17.7ZM9.6 12.4Q9.6 12.4 9.6 12.4Q9.6 12.4 9.6 12.4ZM12.125 11.1Q12.125 11.1 12.125 11.1Q12.125 11.1 12.125 11.1ZM14.2 17 5 7.8V16.2Q5 16.5 5.25 16.75Q5.5 17 5.8 17Z"/>
    </Icon>
  );
});

IconMaterialLabelOffRoundedW100.displayName = 'AmauiIconMaterialLabelOffRoundedW100';

export default IconMaterialLabelOffRoundedW100;
