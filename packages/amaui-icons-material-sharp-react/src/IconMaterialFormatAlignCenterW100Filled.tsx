import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignCenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignCenterW100Filled'

      short_name='FormatAlignCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7Zm4-4v-.7h8.7v.7Zm-4-4v-.7h16.7v.7Zm4-4v-.7h8.7v.7Zm-4-4v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignCenterW100Filled.displayName = 'AmauiIconMaterialFormatAlignCenterW100Filled';

export default IconMaterialFormatAlignCenterW100Filled;
