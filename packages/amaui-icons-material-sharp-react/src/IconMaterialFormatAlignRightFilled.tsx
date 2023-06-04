import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignRightFilled'

      short_name='FormatAlignRight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h18v2Zm6-4v-2h12v2Zm-6-4v-2h18v2Zm6-4V7h12v2ZM3 5V3h18v2Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignRightFilled.displayName = 'AmauiIconMaterialFormatAlignRightFilled';

export default IconMaterialFormatAlignRightFilled;
