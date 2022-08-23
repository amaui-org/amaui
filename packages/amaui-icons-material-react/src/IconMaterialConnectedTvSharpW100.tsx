import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialConnectedTvSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTvSharpW100'
      short_name='ConnectedTv'

      {...props}
    >
      <path d="M5.4 15.6H6.6Q6.475 15.15 6.163 14.838Q5.85 14.525 5.4 14.4ZM8.95 15.6H9.65Q9.65 13.825 8.413 12.587Q7.175 11.35 5.4 11.35V12.05Q6.875 12.05 7.913 13.087Q8.95 14.125 8.95 15.6ZM12 15.6H12.7Q12.7 14.1 12.125 12.762Q11.55 11.425 10.562 10.438Q9.575 9.45 8.238 8.875Q6.9 8.3 5.4 8.3V9Q8.15 9 10.075 10.925Q12 12.85 12 15.6ZM9.3 19.7V17.7H3.3V4.3H20.7V17.7H14.7V19.7ZM4 17H20V5H4ZM4 17V5V17Z"/>
    </Icon>
  );
});

IconMaterialConnectedTvSharpW100.displayName = 'AmauiIconMaterialConnectedTvSharpW100';

export default IconMaterialConnectedTvSharpW100;
