import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignCenter = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignCenter'

      short_name='FormatAlignCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm4-4v-2h10v2Zm-4-4v-2h18v2Zm4-4V7h10v2ZM3 5V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignCenter.displayName = 'AmauiIconMaterialFormatAlignCenter';

export default IconMaterialFormatAlignCenter;
