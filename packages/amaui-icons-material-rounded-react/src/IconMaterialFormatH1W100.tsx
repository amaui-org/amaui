import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH1W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH1W100'

      short_name='FormatH1'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 16.35q-.15 0-.25-.1T6.3 16V8q0-.15.1-.25t.25-.1q.15 0 .25.1T7 8v3.65h5.3V8q0-.15.1-.25t.25-.1q.15 0 .25.1T13 8v8q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.65H7V16q0 .15-.1.25t-.25.1Zm10.7 0q-.15 0-.25-.1T17 16V8.35h-1.65q-.15 0-.25-.1T15 8q0-.15.1-.25t.25-.1h1.6q.325 0 .538.212.212.213.212.538V16q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatH1W100.displayName = 'AmauiIconMaterialFormatH1W100';

export default IconMaterialFormatH1W100;
