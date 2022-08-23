import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCoffeeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeRoundedW100Filled'
      short_name='Coffee'

      {...props}
    >
      <path d="M11 17Q8.65 17 6.975 15.337Q5.3 13.675 5.3 11.3V5Q5.3 4.7 5.5 4.5Q5.7 4.3 6 4.3H17.45Q18.45 4.3 19.15 5Q19.85 5.7 19.85 6.7Q19.85 7.7 19.15 8.4Q18.45 9.1 17.45 9.1H16.7V11.3Q16.7 13.675 15.025 15.337Q13.35 17 11 17ZM6 8.4H16V5H6ZM16.7 8.4H17.45Q18.175 8.4 18.663 7.912Q19.15 7.425 19.15 6.7Q19.15 5.975 18.663 5.487Q18.175 5 17.45 5H16.7ZM5.65 19.7Q5.5 19.7 5.4 19.6Q5.3 19.5 5.3 19.35Q5.3 19.2 5.4 19.1Q5.5 19 5.65 19H17.65Q17.8 19 17.9 19.1Q18 19.2 18 19.35Q18 19.5 17.9 19.6Q17.8 19.7 17.65 19.7Z"/>
    </Icon>
  );
});

IconMaterialCoffeeRoundedW100Filled.displayName = 'AmauiIconMaterialCoffeeRoundedW100Filled';

export default IconMaterialCoffeeRoundedW100Filled;
