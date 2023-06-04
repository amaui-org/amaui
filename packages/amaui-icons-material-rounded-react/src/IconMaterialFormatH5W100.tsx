import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH5W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH5W100'

      short_name='FormatH5'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 16.35q-.15 0-.25-.1T4.3 16V8q0-.15.1-.25t.25-.1q.15 0 .25.1T5 8v3.65h5.3V8q0-.15.1-.25t.25-.1q.15 0 .25.1T11 8v8q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.65H5V16q0 .15-.1.25t-.25.1Zm8.7 0q-.15 0-.25-.1T13 16q0-.15.1-.25t.25-.1h4.85q.35 0 .575-.225Q19 15.2 19 14.85v-1.7q0-.35-.225-.575-.225-.225-.575-.225h-4.45q-.325 0-.537-.213Q13 11.925 13 11.6V8.4q0-.325.213-.538.212-.212.537-.212h5.6q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H13.7v3.3h4.5q.625 0 1.063.437.437.438.437 1.063v1.7q0 .625-.437 1.063-.438.437-1.063.437Z"/>
    </Icon>
  );
});

IconMaterialFormatH5W100.displayName = 'AmauiIconMaterialFormatH5W100';

export default IconMaterialFormatH5W100;
