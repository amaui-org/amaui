import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatUnderlinedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedW100Filled'

      short_name='FormatUnderlined'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 20.35q-.15 0-.25-.1T5.9 20q0-.15.1-.25t.25-.1h11.5q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12 16.1q-2.15 0-3.625-1.475T6.9 11V4.25q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V11q0 1.85 1.275 3.125T12 15.4q1.85 0 3.125-1.275T16.4 11V4.25q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V11q0 2.15-1.475 3.625T12 16.1Z"/>
    </Icon>
  );
});

IconMaterialFormatUnderlinedW100Filled.displayName = 'AmauiIconMaterialFormatUnderlinedW100Filled';

export default IconMaterialFormatUnderlinedW100Filled;
