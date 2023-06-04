import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignLeftFilled'

      short_name='FormatAlignLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-4v-2h12v2Zm0-4v-2h18v2Zm0-4V7h12v2Zm0-4V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignLeftFilled.displayName = 'AmauiIconMaterialFormatAlignLeftFilled';

export default IconMaterialFormatAlignLeftFilled;
