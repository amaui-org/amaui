import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFormatAlignLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatAlignLeftW100Filled'

      short_name='FormatAlignLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7Zm0-4v-.7h10.7v.7Zm0-4v-.7h16.7v.7Zm0-4v-.7h10.7v.7Zm0-4v-.7h16.7v.7Z"/>
    </Icon>
  );
});

IconMaterialFormatAlignLeftW100Filled.displayName = 'AmauiIconMaterialFormatAlignLeftW100Filled';

export default IconMaterialFormatAlignLeftW100Filled;
