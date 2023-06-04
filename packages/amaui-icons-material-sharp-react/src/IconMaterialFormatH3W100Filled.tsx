import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH3W100Filled'

      short_name='FormatH3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 16.35v-8.7H5v4h5.3v-4h.7v8.7h-.7v-4H5v4Zm8.7 0v-.7h5.2q.35 0 .575-.225Q19 15.2 19 14.85v-2.5h-4v-.7h4v-2.5q0-.35-.225-.575-.225-.225-.575-.225H13v-.7h5.2q.625 0 1.063.437.437.438.437 1.063v5.7q0 .625-.437 1.063-.438.437-1.063.437Z"/>
    </Icon>
  );
});

IconMaterialFormatH3W100Filled.displayName = 'AmauiIconMaterialFormatH3W100Filled';

export default IconMaterialFormatH3W100Filled;
