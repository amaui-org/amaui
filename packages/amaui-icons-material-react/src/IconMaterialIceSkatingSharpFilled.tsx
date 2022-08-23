import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIceSkatingSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IceSkatingSharpFilled'
      short_name='IceSkating'

      {...props}
    >
      <path d="M2 22V20H6V18H3V3H11V6H8.5Q8.3 6 8.15 6.15Q8 6.3 8 6.5Q8 6.7 8.15 6.85Q8.3 7 8.5 7H11V7.5Q11 7.7 11.05 8H8.5Q8.3 8 8.15 8.15Q8 8.3 8 8.5Q8 8.7 8.15 8.85Q8.3 9 8.5 9H11.4Q11.725 9.575 12.263 9.975Q12.8 10.375 13.475 10.575L19 12.1V18H16V20H18Q19.25 20 20.125 19.125Q21 18.25 21 17H23Q23 19.075 21.538 20.538Q20.075 22 18 22ZM8 20H14V18H8Z"/>
    </Icon>
  );
});

IconMaterialIceSkatingSharpFilled.displayName = 'AmauiIconMaterialIceSkatingSharpFilled';

export default IconMaterialIceSkatingSharpFilled;
