import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalCenterSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenterSharpW100Filled'
      short_name='AlignHorizontalCenter'

      {...props}
    >
      <path d="M11.65 20.7V16.1H7.3V14.35H11.65V9.65H4.3V7.9H11.65V3.3H12.35V7.9H19.7V9.65H12.35V14.35H16.7V16.1H12.35V20.7Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenterSharpW100Filled.displayName = 'AmauiIconMaterialAlignHorizontalCenterSharpW100Filled';

export default IconMaterialAlignHorizontalCenterSharpW100Filled;
