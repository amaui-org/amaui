import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenShareSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenShareSharpW100'
      short_name='ScreenShare'

      {...props}
    >
      <path d="M9 14.15H9.7V10.5H13.35V11.6L14.8 10.15L13.35 8.7V9.8H9ZM3.3 17.3V4.9H20.7V17.3ZM4 16.6H20V5.6H4ZM2 19V18.3H22V19ZM4 16.6V5.6V16.6Z"/>
    </Icon>
  );
});

IconMaterialScreenShareSharpW100.displayName = 'AmauiIconMaterialScreenShareSharpW100';

export default IconMaterialScreenShareSharpW100;
