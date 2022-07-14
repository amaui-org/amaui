import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddBoxSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddBoxSharpW100'
      short_name='AddBox'

      {...props}
    >
      <path d="M11.65 16.35H12.35V12.35H16.35V11.65H12.35V7.65H11.65V11.65H7.65V12.35H11.65ZM4.3 19.7V4.3H19.7V19.7ZM5 19H19V5H5ZM5 19V5V19Z"/>
    </Icon>
  );
});

export default IconMaterialAddBoxSharpW100;
