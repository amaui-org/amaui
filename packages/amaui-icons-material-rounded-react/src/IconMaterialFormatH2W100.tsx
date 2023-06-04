import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH2W100'

      short_name='FormatH2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.65 16.35q-.15 0-.25-.1T4.3 16V8q0-.15.1-.25t.25-.1q.15 0 .25.1T5 8v3.65h5.3V8q0-.15.1-.25t.25-.1q.15 0 .25.1T11 8v8q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.65H5V16q0 .15-.1.25t-.25.1Zm9.1 0q-.325 0-.537-.213Q13 15.925 13 15.6v-2.45q0-.625.438-1.063.437-.437 1.062-.437h3.7q.35 0 .575-.225Q19 11.2 19 10.85v-1.7q0-.35-.225-.575-.225-.225-.575-.225h-4.85q-.15 0-.25-.1T13 8q0-.15.1-.25t.25-.1h4.85q.625 0 1.063.437.437.438.437 1.063v1.7q0 .625-.437 1.062-.438.438-1.063.438h-3.7q-.35 0-.575.225-.225.225-.225.575v2.5h5.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialFormatH2W100.displayName = 'AmauiIconMaterialFormatH2W100';

export default IconMaterialFormatH2W100;
