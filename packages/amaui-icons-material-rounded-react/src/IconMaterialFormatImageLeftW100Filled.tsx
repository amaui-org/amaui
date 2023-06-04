import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatImageLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageLeftW100Filled'

      short_name='FormatImageLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 20.35H4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4h-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4h-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4h-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4H4q-.15 0-.25-.1T3.65 4q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm-8.4 12H4.4q-.325 0-.537-.213-.213-.212-.213-.537V8.4q0-.325.213-.538.212-.212.537-.212h7.2q.325 0 .538.212.212.213.212.538v7.2q0 .325-.212.537-.213.213-.538.213Zm.05-.7v-7.3h-7.3v7.3Z"/>
    </Icon>
  );
});

IconMaterialFormatImageLeftW100Filled.displayName = 'AmauiIconMaterialFormatImageLeftW100Filled';

export default IconMaterialFormatImageLeftW100Filled;
