import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoSimSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimSharpW100'
      short_name='NoSim'

      {...props}
    >
      <path d="M18.7 16.2 18 15.5V4H10.85L8.65 6.2L8.15 5.7L10.55 3.3H18.7ZM20.4 21.75 18.7 20.05V20.7H5.3V8.55L6.25 7.6L2.45 3.8L2.95 3.3L20.9 21.25ZM6.75 8.1 6 8.85V20H18V19.25ZM13.425 10.95ZM12.475 13.775Z"/>
    </Icon>
  );
});

IconMaterialNoSimSharpW100.displayName = 'AmauiIconMaterialNoSimSharpW100';

export default IconMaterialNoSimSharpW100;
