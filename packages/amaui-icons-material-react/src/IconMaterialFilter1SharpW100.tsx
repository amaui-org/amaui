import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter1SharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1SharpW100'
      short_name='Filter1'

      {...props}
    >
      <path d="M14 14.35H14.7V5.65H12V6.35H14ZM6.65 16.7V3.3H20.05V16.7ZM7.35 16H19.35V4H7.35ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4ZM7.35 16V4V16Z"/>
    </Icon>
  );
});

IconMaterialFilter1SharpW100.displayName = 'AmauiIconMaterialFilter1SharpW100';

export default IconMaterialFilter1SharpW100;
