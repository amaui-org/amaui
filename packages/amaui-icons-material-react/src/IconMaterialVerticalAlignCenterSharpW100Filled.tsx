import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignCenterSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignCenterSharpW100Filled'
      short_name='VerticalAlignCenter'

      {...props}
    >
      <path d="M11.65 21.35V16.25L9.4 18.5L8.9 18L12 14.9L15.1 18L14.6 18.5L12.35 16.25V21.35ZM4.65 12.35V11.65H19.35V12.35ZM12 9.1 8.9 6 9.4 5.5 11.65 7.75V2.65H12.35V7.75L14.6 5.5L15.1 6Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignCenterSharpW100Filled.displayName = 'AmauiIconMaterialVerticalAlignCenterSharpW100Filled';

export default IconMaterialVerticalAlignCenterSharpW100Filled;
