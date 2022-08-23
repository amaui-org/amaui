import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIosShareSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShareSharpW100Filled'
      short_name='IosShare'

      {...props}
    >
      <path d="M11.65 15.35V4.55L9.4 6.8L8.9 6.3L12 3.2L15.1 6.3L14.6 6.8L12.35 4.55V15.35ZM5.3 21.7V9.3H8.65V10H6V21H18V10H15.35V9.3H18.7V21.7Z"/>
    </Icon>
  );
});

IconMaterialIosShareSharpW100Filled.displayName = 'AmauiIconMaterialIosShareSharpW100Filled';

export default IconMaterialIosShareSharpW100Filled;
