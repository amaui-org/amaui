import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH4W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH4W100Filled'

      short_name='FormatH4'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.15 16.35q-.15 0-.25-.1T3.8 16V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h5.3V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8q0 .15-.1.25t-.25.1q-.15 0-.25-.1T9.8 16v-3.65H4.5V16q0 .15-.1.25t-.25.1Zm13.7 0q-.15 0-.25-.1t-.1-.25v-2.65h-4.25q-.325 0-.537-.213-.213-.212-.213-.537V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h4.3V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H18.2V16q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatH4W100Filled.displayName = 'AmauiIconMaterialFormatH4W100Filled';

export default IconMaterialFormatH4W100Filled;
