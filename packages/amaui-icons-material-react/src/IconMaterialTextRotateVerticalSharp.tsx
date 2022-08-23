import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotateVerticalSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateVerticalSharp'
      short_name='TextRotateVertical'

      {...props}
    >
      <path d="M10.9 17 15 6H17L21.1 17H19.2L18.2 14.2H13.8L12.8 17ZM14.35 12.6H17.65L16.05 8.05H15.95ZM6 19 2.5 15.5 3.9 14.1 5 15.15V5H7V15.15L8.1 14.1L9.5 15.5Z"/>
    </Icon>
  );
});

IconMaterialTextRotateVerticalSharp.displayName = 'AmauiIconMaterialTextRotateVerticalSharp';

export default IconMaterialTextRotateVerticalSharp;
