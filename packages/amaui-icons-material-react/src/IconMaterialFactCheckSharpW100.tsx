import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFactCheckSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactCheckSharpW100'
      short_name='FactCheck'

      {...props}
    >
      <path d="M5.65 8.35H9.35V7.65H5.65ZM5.65 12.35H9.35V11.65H5.65ZM5.65 16.35H9.35V15.65H5.65ZM14.55 14.075 18.575 10.05 18.075 9.55 14.55 13.1 13.125 11.675 12.65 12.175ZM3.3 19.7V4.3H20.7V19.7ZM4 19H20V5H4ZM4 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialFactCheckSharpW100.displayName = 'AmauiIconMaterialFactCheckSharpW100';

export default IconMaterialFactCheckSharpW100;
