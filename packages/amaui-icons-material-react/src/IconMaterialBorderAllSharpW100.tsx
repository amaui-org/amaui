import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderAllSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllSharpW100'
      short_name='BorderAll'

      {...props}
    >
      <path d="M4.3 19.7V4.3H19.7V19.7ZM19 19V12.35H12.35V19ZM19 5H12.35V11.65H19ZM5 5V11.65H11.65V5ZM5 19H11.65V12.35H5Z"/>
    </Icon>
  );
});

export default IconMaterialBorderAllSharpW100;
