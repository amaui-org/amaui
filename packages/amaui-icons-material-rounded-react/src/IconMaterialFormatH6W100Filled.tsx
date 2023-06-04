import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH6W100Filled'

      short_name='FormatH6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 16.35q-.15 0-.25-.1t-.1-.25V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v3.65h5.3V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25v-3.65h-5.3V16q0 .15-.1.25t-.25.1Zm9.85 0q-.625 0-1.062-.437-.438-.438-.438-1.063v-5.7q0-.625.438-1.063.437-.437 1.062-.437h4.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-4.85q-.35 0-.575.225-.225.225-.225.575v2.5h4.5q.625 0 1.063.437.437.438.437 1.063v1.7q0 .625-.437 1.063-.438.437-1.063.437Zm-.8-4v2.5q0 .35.225.575.225.225.575.225h3.7q.35 0 .575-.225.225-.225.225-.575v-1.7q0-.35-.225-.575-.225-.225-.575-.225Z"/>
    </Icon>
  );
});

IconMaterialFormatH6W100Filled.displayName = 'AmauiIconMaterialFormatH6W100Filled';

export default IconMaterialFormatH6W100Filled;
