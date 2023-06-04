import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextClipW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextClipW100Filled'

      short_name='FormatTextClip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 19.35q-.15 0-.25-.1t-.1-.25V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v14q0 .15-.1.25t-.25.1Zm12.5 0q-.15 0-.25-.1t-.1-.25v-6.65H8.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h8.45V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v14q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatTextClipW100Filled.displayName = 'AmauiIconMaterialFormatTextClipW100Filled';

export default IconMaterialFormatTextClipW100Filled;
