import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalCenterSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterSharp'
      short_name='AlignVerticalCenter'

      {...props}
    >
      <path d="M7 21V13H2V11H7V3H10V11H14V6H17V11H22V13H17V18H14V13H10V21Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalCenterSharp.displayName = 'AmauiIconMaterialAlignVerticalCenterSharp';

export default IconMaterialAlignVerticalCenterSharp;
