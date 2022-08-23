import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalCenterSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenterSharp'
      short_name='AlignHorizontalCenter'

      {...props}
    >
      <path d="M11 22V17H6V14H11V10H3V7H11V2H13V7H21V10H13V14H18V17H13V22Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenterSharp.displayName = 'AmauiIconMaterialAlignHorizontalCenterSharp';

export default IconMaterialAlignHorizontalCenterSharp;
