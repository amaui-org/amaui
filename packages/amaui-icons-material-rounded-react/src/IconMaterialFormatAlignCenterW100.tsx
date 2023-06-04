import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignCenterW100'

      short_name='FormatAlignCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm4-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-4-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm4-4q-.15 0-.25-.1T7.65 8q0-.15.1-.25t.25-.1h8q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-4-4q-.15 0-.25-.1T3.65 4q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignCenterW100.displayName = 'AmauiIconMaterialFormatAlignCenterW100';

export default IconMaterialFormatAlignCenterW100;
