import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFactCheckSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FactCheckSharp'
      short_name='FactCheck'

      {...props}
    >
      <path d="M5 9H10V7H5ZM5 13H10V11H5ZM5 17H10V15H5ZM14.55 15 19.5 10.05 18.075 8.625 14.55 12.175 13.125 10.75 11.725 12.175ZM2 21V3H22V21ZM4 19H20V5H4ZM4 19V5V19Z"/>
    </Icon>
  );
});

IconMaterialFactCheckSharp.displayName = 'AmauiIconMaterialFactCheckSharp';

export default IconMaterialFactCheckSharp;
