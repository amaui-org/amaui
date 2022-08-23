import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPermMediaSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaSharpW100Filled'
      short_name='PermMedia'

      {...props}
    >
      <path d="M5.65 16.75V5.05H12.05L13.35 6.35H21.05V16.75ZM2.95 19.45V8.35H3.65V18.75H18.05V19.45ZM9.175 13.7H17.475L14.925 10.3L12.425 13.4L10.825 11.55Z"/>
    </Icon>
  );
});

IconMaterialPermMediaSharpW100Filled.displayName = 'AmauiIconMaterialPermMediaSharpW100Filled';

export default IconMaterialPermMediaSharpW100Filled;
