import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCoffeeRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CoffeeRoundedFilled'
      short_name='Coffee'

      {...props}
    >
      <path d="M11 18Q8.1 18 6.05 15.95Q4 13.9 4 11V5Q4 4.175 4.588 3.587Q5.175 3 6 3H18.5Q19.95 3 20.975 4.025Q22 5.05 22 6.5Q22 7.95 20.975 8.975Q19.95 10 18.5 10H18V11Q18 13.9 15.95 15.95Q13.9 18 11 18ZM6 8H16V5H6ZM18 8H18.5Q19.125 8 19.562 7.562Q20 7.125 20 6.5Q20 5.875 19.562 5.438Q19.125 5 18.5 5H18ZM5 21Q4.575 21 4.287 20.712Q4 20.425 4 20Q4 19.575 4.287 19.288Q4.575 19 5 19H19Q19.425 19 19.712 19.288Q20 19.575 20 20Q20 20.425 19.712 20.712Q19.425 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialCoffeeRoundedFilled.displayName = 'AmauiIconMaterialCoffeeRoundedFilled';

export default IconMaterialCoffeeRoundedFilled;
