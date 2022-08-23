import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEdgesensorLowSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EdgesensorLowSharpW100Filled'
      short_name='EdgesensorLow'

      {...props}
    >
      <path d="M7.05 20.7V3.3H16.95V20.7ZM7.75 17.65H16.25V6.35H7.75ZM4.35 13.35V7.65H5.05V13.35ZM18.95 16.35V10.65H19.65V16.35Z"/>
    </Icon>
  );
});

IconMaterialEdgesensorLowSharpW100Filled.displayName = 'AmauiIconMaterialEdgesensorLowSharpW100Filled';

export default IconMaterialEdgesensorLowSharpW100Filled;
