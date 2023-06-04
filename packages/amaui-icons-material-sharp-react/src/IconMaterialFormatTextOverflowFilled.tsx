import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatTextOverflowFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatTextOverflowFilled'

      short_name='FormatTextOverflow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20V4h2v16Zm12.45-4.45-1.4-1.425L16.175 13H8v-2h8.175L15.05 9.875l1.4-1.425L20 12ZM12 20v-5h2v5Zm0-11V4h2v5Z"/>
    </Icon>
  );
});

IconMaterialFormatTextOverflowFilled.displayName = 'AmauiIconMaterialFormatTextOverflowFilled';

export default IconMaterialFormatTextOverflowFilled;
