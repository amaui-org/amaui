import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter1SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter1SharpW100Filled'
      short_name='Filter1'

      {...props}
    >
      <path d="M14 14.35H14.7V5.65H12V6.35H14ZM6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4Z"/>
    </Icon>
  );
});

IconMaterialFilter1SharpW100Filled.displayName = 'AmauiIconMaterialFilter1SharpW100Filled';

export default IconMaterialFilter1SharpW100Filled;
