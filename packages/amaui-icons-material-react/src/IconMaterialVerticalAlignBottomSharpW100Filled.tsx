import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignBottomSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignBottomSharpW100Filled'
      short_name='VerticalAlignBottom'

      {...props}
    >
      <path d="M4.65 20.35V19.65H19.35V20.35ZM12 16.1 7.9 12 8.4 11.5 11.65 14.75V3.65H12.35V14.75L15.6 11.5L16.1 12Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignBottomSharpW100Filled.displayName = 'AmauiIconMaterialVerticalAlignBottomSharpW100Filled';

export default IconMaterialVerticalAlignBottomSharpW100Filled;
