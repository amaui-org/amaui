import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialElectricBikeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricBikeSharpFilled'
      short_name='ElectricBike'

      {...props}
    >
      <path d="M13 23 7 20H11V18L17 21H13ZM5 17Q2.875 17 1.438 15.562Q0 14.125 0 12Q0 9.875 1.463 8.438Q2.925 7 5 7Q6.925 7 8.238 8.15Q9.55 9.3 9.9 11H10.55L8.75 6H7V4H12V6H10.9L11.25 7H16.05L14.6 3H12V1H16.025L18.2 6.95H19Q21.075 6.95 22.538 8.412Q24 9.875 24 11.95Q24 14.05 22.55 15.525Q21.1 17 19 17Q17.2 17 15.838 15.875Q14.475 14.75 14.1 13H9.9Q9.55 14.725 8.2 15.863Q6.85 17 5 17ZM5 13H7.8V11H5ZM18 12.35 19.9 11.65 18.9 9 17.05 9.7ZM12.7 11H14.1Q14.225 10.425 14.438 9.925Q14.65 9.425 15 9H11.95Z"/>
    </Icon>
  );
});

IconMaterialElectricBikeSharpFilled.displayName = 'AmauiIconMaterialElectricBikeSharpFilled';

export default IconMaterialElectricBikeSharpFilled;
