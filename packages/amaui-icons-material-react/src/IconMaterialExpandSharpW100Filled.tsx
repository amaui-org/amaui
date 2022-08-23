import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialExpandSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandSharpW100Filled'
      short_name='Expand'

      {...props}
    >
      <path d="M4.65 21.35V20.65H19.35V21.35ZM4.65 3.35V2.65H19.35V3.35ZM12 18.1 8.9 15 9.4 14.5 11.65 16.75V7.25L9.4 9.5L8.9 9L12 5.9L15.1 9L14.6 9.5L12.35 7.25V16.75L14.6 14.5L15.1 15Z"/>
    </Icon>
  );
});

IconMaterialExpandSharpW100Filled.displayName = 'AmauiIconMaterialExpandSharpW100Filled';

export default IconMaterialExpandSharpW100Filled;
