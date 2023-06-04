import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignLeft'

      short_name='FormatAlignLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-4v-2h12v2Zm0-4v-2h18v2Zm0-4V7h12v2Zm0-4V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignLeft.displayName = 'AmauiIconMaterialFormatAlignLeft';

export default IconMaterialFormatAlignLeft;
