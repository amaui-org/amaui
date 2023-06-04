import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatUnderlinedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatUnderlinedW100'

      short_name='FormatUnderlined'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.9 20.35v-.7h12.2v.7ZM12 16.1q-2.15 0-3.625-1.475T6.9 11V3.9h.7V11q0 1.85 1.275 3.125T12 15.4q1.85 0 3.125-1.275T16.4 11V3.9h.7V11q0 2.15-1.475 3.625T12 16.1Z"/>
    </Icon>
  );
});

IconMaterialFormatUnderlinedW100.displayName = 'AmauiIconMaterialFormatUnderlinedW100';

export default IconMaterialFormatUnderlinedW100;
