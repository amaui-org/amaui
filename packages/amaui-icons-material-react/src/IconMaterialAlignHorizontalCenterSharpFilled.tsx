import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalCenterSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenterSharpFilled'
      short_name='AlignHorizontalCenter'

      {...props}
    >
      <path d="M11 22V17H6V14H11V10H3V7H11V2H13V7H21V10H13V14H18V17H13V22Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenterSharpFilled.displayName = 'AmauiIconMaterialAlignHorizontalCenterSharpFilled';

export default IconMaterialAlignHorizontalCenterSharpFilled;
