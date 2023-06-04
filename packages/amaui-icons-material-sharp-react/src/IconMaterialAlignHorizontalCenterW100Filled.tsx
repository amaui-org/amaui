import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalCenterW100Filled'

      short_name='AlignHorizontalCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 20.7v-4.6H7.3v-1.75h4.35v-4.7H4.3V7.9h7.35V3.3h.7v4.6h7.35v1.75h-7.35v4.7h4.35v1.75h-4.35v4.6Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalCenterW100Filled.displayName = 'AmauiIconMaterialAlignHorizontalCenterW100Filled';

export default IconMaterialAlignHorizontalCenterW100Filled;
