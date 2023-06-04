import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignJustifyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignJustifyFilled'

      short_name='FormatAlignJustify'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm0-4v-2h18v2Zm0-4v-2h18v2Zm0-4V7h18v2Zm0-4V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignJustifyFilled.displayName = 'AmauiIconMaterialFormatAlignJustifyFilled';

export default IconMaterialFormatAlignJustifyFilled;
