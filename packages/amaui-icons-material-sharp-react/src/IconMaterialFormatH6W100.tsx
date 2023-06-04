import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatH6W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatH6W100'

      short_name='FormatH6'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 16.35v-8.7H5v4h5.3v-4h.7v8.7h-.7v-4H5v4Zm10.2 0q-.625 0-1.062-.437Q13 15.475 13 14.85v-5.7q0-.625.438-1.063.437-.437 1.062-.437h5.2v.7h-5.2q-.35 0-.575.225-.225.225-.225.575v2.5h4.5q.625 0 1.063.437.437.438.437 1.063v1.7q0 .625-.437 1.063-.438.437-1.063.437Zm-.8-4v2.5q0 .35.225.575.225.225.575.225h3.7q.35 0 .575-.225Q19 15.2 19 14.85v-1.7q0-.35-.225-.575-.225-.225-.575-.225Z"/>
    </Icon>
  );
});

IconMaterialFormatH6W100.displayName = 'AmauiIconMaterialFormatH6W100';

export default IconMaterialFormatH6W100;
