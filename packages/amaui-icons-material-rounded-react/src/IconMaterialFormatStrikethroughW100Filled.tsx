import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatStrikethroughW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatStrikethroughW100Filled'

      short_name='FormatStrikethrough'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.5 13.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h17q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm8.15-2.7v-4.8H6.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h11q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-5.15v4.8Zm.35 8.2q-.15 0-.25-.1t-.1-.25v-3.15h.7v3.15q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatStrikethroughW100Filled.displayName = 'AmauiIconMaterialFormatStrikethroughW100Filled';

export default IconMaterialFormatStrikethroughW100Filled;
