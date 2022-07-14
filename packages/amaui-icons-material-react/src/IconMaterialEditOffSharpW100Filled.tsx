import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffSharpW100Filled'
      short_name='EditOff'

      {...props}
    >
      <path d="M19.3 21.2 12.175 14.075 6.55 19.7H4.575V17.725L10.2 12.1L2.8 4.7L3.3 4.2L19.8 20.7ZM14.075 12.175 12.1 10.2 15.55 6.75 17.525 8.725ZM18.025 8.225 16.05 6.25 17.725 4.575 19.7 6.55Z"/>
    </Icon>
  );
});

export default IconMaterialEditOffSharpW100Filled;
