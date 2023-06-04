import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextOverflowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextOverflowW100'

      short_name='FormatTextOverflow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.625 19.35V4.65h.7v14.7Zm10.125-4.725-.475-.5 1.775-1.775H9.325v-.7h7.725l-1.775-1.775.475-.5L18.375 12Zm-3.625 4.725v-4h.7v4Zm0-10.7v-4h.7v4Z"/>
    </Icon>
  );
});

IconMaterialFormatTextOverflowW100.displayName = 'AmauiIconMaterialFormatTextOverflowW100';

export default IconMaterialFormatTextOverflowW100;
