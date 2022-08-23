import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalAlignTopSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalAlignTopSharpW100'
      short_name='VerticalAlignTop'

      {...props}
    >
      <path d="M4.65 3.65H19.35V4.35H4.65ZM12 7.9 16.1 12 15.6 12.5 12.35 9.25V20.35H11.65V9.25L8.4 12.5L7.9 12Z"/>
    </Icon>
  );
});

IconMaterialVerticalAlignTopSharpW100.displayName = 'AmauiIconMaterialVerticalAlignTopSharpW100';

export default IconMaterialVerticalAlignTopSharpW100;
