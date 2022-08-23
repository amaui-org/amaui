import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCoffeeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeSharp'
      short_name='Coffee'

      {...props}
    >
      <path d="M11 18Q8.1 18 6.05 15.95Q4 13.9 4 11V3H18.5Q19.95 3 20.975 4.025Q22 5.05 22 6.5Q22 7.95 20.975 8.975Q19.95 10 18.5 10H18V11Q18 13.9 15.95 15.95Q13.9 18 11 18ZM6 8H16V5H6ZM11 16Q13.075 16 14.538 14.537Q16 13.075 16 11V10H6V11Q6 13.075 7.463 14.537Q8.925 16 11 16ZM18 8H18.5Q19.125 8 19.562 7.562Q20 7.125 20 6.5Q20 5.875 19.562 5.438Q19.125 5 18.5 5H18ZM4 21V19H20V21ZM11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Q11 10 11 10Z"/>
    </Icon>
  );
});

IconMaterialCoffeeSharp.displayName = 'AmauiIconMaterialCoffeeSharp';

export default IconMaterialCoffeeSharp;
