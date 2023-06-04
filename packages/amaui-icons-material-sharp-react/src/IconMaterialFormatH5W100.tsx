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
      <path d="M4.3 16.35v-8.7H5v4h5.3v-4h.7v8.7h-.7v-4H5v4Zm8.7 0v-.7h5.2q.35 0 .575-.225Q19 15.2 19 14.85v-1.7q0-.35-.225-.575-.225-.225-.575-.225H13v-4.7h6.7v.7h-6v3.3h4.5q.625 0 1.063.437.437.438.437 1.063v1.7q0 .625-.437 1.063-.438.437-1.063.437Z"/>
    </Icon>
  );
});

IconMaterialFormatH5W100.displayName = 'AmauiIconMaterialFormatH5W100';

export default IconMaterialFormatH5W100;
