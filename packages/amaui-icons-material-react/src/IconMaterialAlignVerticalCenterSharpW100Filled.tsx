import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAlignVerticalCenterSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignVerticalCenterSharpW100Filled'
      short_name='AlignVerticalCenter'

      {...props}
    >
      <path d="M7.775 19.7V12.35H3.3V11.65H7.775V4.3H9.525V11.65H14.475V7.3H16.225V11.65H20.7V12.35H16.225V16.7H14.475V12.35H9.525V19.7Z"/>
    </Icon>
  );
});

IconMaterialAlignVerticalCenterSharpW100Filled.displayName = 'AmauiIconMaterialAlignVerticalCenterSharpW100Filled';

export default IconMaterialAlignVerticalCenterSharpW100Filled;
