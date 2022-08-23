import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter4SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4SharpW100Filled'
      short_name='Filter4'

      {...props}
    >
      <path d="M6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4ZM15 14.35H15.7V5.65H15V9.65H11.7V5.65H11V10.35H15Z"/>
    </Icon>
  );
});

IconMaterialFilter4SharpW100Filled.displayName = 'AmauiIconMaterialFilter4SharpW100Filled';

export default IconMaterialFilter4SharpW100Filled;
