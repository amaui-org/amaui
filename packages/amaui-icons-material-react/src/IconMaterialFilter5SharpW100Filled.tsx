import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilter5SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter5SharpW100Filled'
      short_name='Filter5'

      {...props}
    >
      <path d="M11 14.35H15.7V9.65H11.7V6.35H15.7V5.65H11V10.35H15V13.65H11ZM6.65 16.7V3.3H20.05V16.7ZM3.95 19.4V6.8H4.65V18.7H16.55V19.4Z"/>
    </Icon>
  );
});

IconMaterialFilter5SharpW100Filled.displayName = 'AmauiIconMaterialFilter5SharpW100Filled';

export default IconMaterialFilter5SharpW100Filled;
