import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsOffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffRoundedFilled'
      short_name='DirectionsOff'

      {...props}
    >
      <path d="M15.975 18.8 13.375 21.4Q12.775 22 11.975 22Q11.175 22 10.575 21.4L2.575 13.4Q1.975 12.8 1.975 12Q1.975 11.2 2.575 10.6L5.175 8L1.375 4.2Q1.075 3.9 1.075 3.487Q1.075 3.075 1.375 2.775Q1.675 2.475 2.087 2.475Q2.5 2.475 2.8 2.775L21.175 21.175Q21.475 21.475 21.475 21.875Q21.475 22.275 21.175 22.575Q20.875 22.875 20.462 22.875Q20.05 22.875 19.75 22.575ZM13.075 15.9 11.65 14.5 11.25 14.9Q10.975 15.175 10.975 15.587Q10.975 16 11.275 16.3Q11.55 16.575 11.975 16.575Q12.4 16.575 12.675 16.3ZM10.15 13 8.15 11H7.975Q7.55 11 7.263 11.287Q6.975 11.575 6.975 12Q6.975 12.425 7.263 12.712Q7.55 13 7.975 13ZM15.925 13 18.825 15.95 21.375 13.4Q21.975 12.8 21.975 12Q21.975 11.2 21.375 10.6L13.375 2.6Q12.775 2 11.975 2Q11.175 2 10.575 2.6L8.025 5.15L11 8.125Q11.05 8 11.113 7.9Q11.175 7.8 11.275 7.7Q11.575 7.4 11.975 7.4Q12.375 7.4 12.675 7.7L16.25 11.275Q16.55 11.575 16.562 12Q16.575 12.425 16.25 12.7Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOffRoundedFilled.displayName = 'AmauiIconMaterialDirectionsOffRoundedFilled';

export default IconMaterialDirectionsOffRoundedFilled;
