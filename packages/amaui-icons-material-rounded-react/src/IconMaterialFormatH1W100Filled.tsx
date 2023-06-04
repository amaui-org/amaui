import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH1W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH1W100Filled'

      short_name='FormatH1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 16.35q-.15 0-.25-.1t-.1-.25V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h5.3V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.65h-5.3V16q0 .15-.1.25t-.25.1Zm10.7 0q-.15 0-.25-.1t-.1-.25V8.35H14.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.6q.325 0 .537.212.213.213.213.538V16q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatH1W100Filled.displayName = 'AmauiIconMaterialFormatH1W100Filled';

export default IconMaterialFormatH1W100Filled;
