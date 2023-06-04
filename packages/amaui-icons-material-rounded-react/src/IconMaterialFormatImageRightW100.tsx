import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatImageRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatImageRightW100'

      short_name='FormatImageRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4q-.15 0-.25-.1T3.65 8q0-.15.1-.25t.25-.1h4q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm0-4q-.15 0-.25-.1T3.65 4q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm8.4 12q-.325 0-.537-.213-.213-.212-.213-.537V8.4q0-.325.213-.538.212-.212.537-.212h7.2q.325 0 .538.212.212.213.212.538v7.2q0 .325-.212.537-.213.213-.538.213Zm-.05-.7h7.3v-7.3h-7.3Z"/>
    </Icon>
  );
});

IconMaterialFormatImageRightW100.displayName = 'AmauiIconMaterialFormatImageRightW100';

export default IconMaterialFormatImageRightW100;
