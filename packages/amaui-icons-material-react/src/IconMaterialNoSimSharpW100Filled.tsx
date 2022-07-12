import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimSharpW100Filled'
      short_name='NoSim'

      {...props}
    >
      <path d="M18.7 16.2 8.15 5.7 10.55 3.3H18.7ZM20.4 21.75 18.55 19.9V20.7H5.3V8.55L6.25 7.6L2.45 3.8L2.95 3.3L20.9 21.25Z"/>
    </Icon>
  )
});

export default IconMaterialNoSimSharpW100Filled;
