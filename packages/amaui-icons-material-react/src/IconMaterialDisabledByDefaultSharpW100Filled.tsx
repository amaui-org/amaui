import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDisabledByDefaultSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultSharpW100Filled'
      short_name='DisabledByDefault'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM8.4 16.075 12 12.475 15.6 16.075 16.075 15.6 12.475 12 16.075 8.4 15.6 7.925 12 11.525 8.4 7.925 7.925 8.4 11.525 12 7.925 15.6Z"/>
    </Icon>
  );
});

export default IconMaterialDisabledByDefaultSharpW100Filled;
