import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCoffeeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeSharpW100Filled'
      short_name='Coffee'

      {...props}
    >
      <path d="M11 17Q8.65 17 6.975 15.337Q5.3 13.675 5.3 11.3V4.3H17.45Q18.45 4.3 19.15 5Q19.85 5.7 19.85 6.7Q19.85 7.7 19.15 8.4Q18.45 9.1 17.45 9.1H16.7V11.3Q16.7 13.675 15.025 15.337Q13.35 17 11 17ZM6 8.4H16V5H6ZM16.7 8.4H17.45Q18.175 8.4 18.663 7.912Q19.15 7.425 19.15 6.7Q19.15 5.975 18.663 5.487Q18.175 5 17.45 5H16.7ZM5.3 19.7V19H18V19.7Z"/>
    </Icon>
  );
});

IconMaterialCoffeeSharpW100Filled.displayName = 'AmauiIconMaterialCoffeeSharpW100Filled';

export default IconMaterialCoffeeSharpW100Filled;
