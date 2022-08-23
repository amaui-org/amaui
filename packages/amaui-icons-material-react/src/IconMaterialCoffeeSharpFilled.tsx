import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCoffeeSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeSharpFilled'
      short_name='Coffee'

      {...props}
    >
      <path d="M11 18Q8.1 18 6.05 15.95Q4 13.9 4 11V3H18.5Q19.95 3 20.975 4.025Q22 5.05 22 6.5Q22 7.95 20.975 8.975Q19.95 10 18.5 10H18V11Q18 13.9 15.95 15.95Q13.9 18 11 18ZM6 8H16V5H6ZM18 8H18.5Q19.125 8 19.562 7.562Q20 7.125 20 6.5Q20 5.875 19.562 5.438Q19.125 5 18.5 5H18ZM4 21V19H20V21Z"/>
    </Icon>
  );
});

IconMaterialCoffeeSharpFilled.displayName = 'AmauiIconMaterialCoffeeSharpFilled';

export default IconMaterialCoffeeSharpFilled;
