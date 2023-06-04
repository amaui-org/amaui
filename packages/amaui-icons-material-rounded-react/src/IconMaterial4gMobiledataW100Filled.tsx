import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial4gMobiledataW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='4gMobiledataW100Filled'

      short_name='4gMobiledata'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 16.35q-.15 0-.25-.1t-.1-.25v-2.65H4.4q-.325 0-.537-.213-.213-.212-.213-.537V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65h3.3V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.65H10q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H8.35V16q0 .15-.1.25t-.25.1Zm6.15 0q-.65 0-1.075-.425-.425-.425-.425-1.075v-5.7q0-.65.425-1.075.425-.425 1.075-.425H20q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-5.85q-.35 0-.575.225-.225.225-.225.575v5.7q0 .35.225.575.225.225.575.225h4.7q.35 0 .575-.225.225-.225.225-.575v-2.5H17.5q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h2.1q.325 0 .538.212.212.213.212.538v2.45q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterial4gMobiledataW100Filled.displayName = 'AmauiIconMaterial4gMobiledataW100Filled';

export default IconMaterial4gMobiledataW100Filled;
