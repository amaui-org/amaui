import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocalCafeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalCafeSharp'
      short_name='LocalCafe'

      {...props}
    >
      <path d="M4 21V19H20V21ZM4 17V3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V8Q22 8.825 21.413 9.412Q20.825 10 20 10H18V17ZM6 15H16V5H6ZM18 8H20Q20 8 20 8Q20 8 20 8V5Q20 5 20 5Q20 5 20 5H18ZM11 10Z"/>
    </Icon>
  );
});

IconMaterialLocalCafeSharp.displayName = 'AmauiIconMaterialLocalCafeSharp';

export default IconMaterialLocalCafeSharp;
