import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalBottomSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalBottomSharpW100Filled'
      short_name='AlignVerticalBottom'

      {...props}
    >
      <path d="M3.3 20.05V19.35H20.7V20.05ZM7.9 16.6V3.925H9.65V16.6ZM14.35 16.6V9.925H16.1V16.6Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalBottomSharpW100Filled.displayName = 'AmauiIconMaterialAlignVerticalBottomSharpW100Filled';

export default IconMaterialAlignVerticalBottomSharpW100Filled;
