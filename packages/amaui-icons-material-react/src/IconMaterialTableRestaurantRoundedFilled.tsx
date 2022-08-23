import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableRestaurantRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRestaurantRoundedFilled'
      short_name='TableRestaurant'

      {...props}
    >
      <path d="M6.975 13H17.075L16.825 11H7.25ZM5.15 20Q4.7 20 4.412 19.663Q4.125 19.325 4.175 18.875L5.25 11H3.025Q2.525 11 2.238 10.6Q1.95 10.2 2.075 9.725L3.5 4.725Q3.6 4.4 3.85 4.2Q4.1 4 4.45 4H19.6Q19.95 4 20.2 4.2Q20.45 4.4 20.55 4.725L21.975 9.725Q22.1 10.2 21.812 10.6Q21.525 11 21.025 11H18.825L19.875 18.875Q19.925 19.325 19.638 19.663Q19.35 20 18.9 20Q18.525 20 18.238 19.762Q17.95 19.525 17.9 19.15L17.35 15H6.7L6.15 19.15Q6.1 19.525 5.812 19.762Q5.525 20 5.15 20Z"/>
    </Icon>
  );
});

IconMaterialTableRestaurantRoundedFilled.displayName = 'AmauiIconMaterialTableRestaurantRoundedFilled';

export default IconMaterialTableRestaurantRoundedFilled;
