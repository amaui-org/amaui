import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH2W100Filled'

      short_name='FormatH2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 16.35v-8.7H5v4h5.3v-4h.7v8.7h-.7v-4H5v4Zm8.7 0v-3.2q0-.625.438-1.063.437-.437 1.062-.437h3.7q.35 0 .575-.225Q19 11.2 19 10.85v-1.7q0-.35-.225-.575-.225-.225-.575-.225H13v-.7h5.2q.625 0 1.063.437.437.438.437 1.063v1.7q0 .625-.437 1.062-.438.438-1.063.438h-3.7q-.35 0-.575.225-.225.225-.225.575v2.5h6v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatH2W100Filled.displayName = 'AmauiIconMaterialFormatH2W100Filled';

export default IconMaterialFormatH2W100Filled;
