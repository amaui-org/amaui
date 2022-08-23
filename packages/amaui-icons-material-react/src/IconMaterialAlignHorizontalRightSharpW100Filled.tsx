import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignHorizontalRightSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignHorizontalRightSharpW100Filled'
      short_name='AlignHorizontalRight'

      {...props}
    >
      <path d="M19 20.7V3.3H19.7V20.7ZM4.3 9.65V7.9H16.25V9.65ZM10.3 16.1V14.35H16.25V16.1Z"/>
    </Icon>
  );
});

IconMaterialAlignHorizontalRightSharpW100Filled.displayName = 'AmauiIconMaterialAlignHorizontalRightSharpW100Filled';

export default IconMaterialAlignHorizontalRightSharpW100Filled;
