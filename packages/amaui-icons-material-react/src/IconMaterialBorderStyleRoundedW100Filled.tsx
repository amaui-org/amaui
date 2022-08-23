import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderStyleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderStyleRoundedW100Filled'
      short_name='BorderStyle'

      {...props}
    >
      <path d="M15.5 20.5V19.5H16.5V20.5ZM19.5 20.5V19.5H20.5V20.5ZM7.5 20.5V19.5H8.5V20.5ZM11.5 20.5V19.5H12.5V20.5ZM19.5 16.5V15.5H20.5V16.5ZM19.5 12.5V11.5H20.5V12.5ZM3.5 20.5V5.1Q3.5 4.4 3.95 3.95Q4.4 3.5 5.1 3.5H20.5V4.5H5.1Q4.85 4.5 4.675 4.675Q4.5 4.85 4.5 5.1V20.5ZM19.5 8.5V7.5H20.5V8.5Z"/>
    </Icon>
  );
});

IconMaterialBorderStyleRoundedW100Filled.displayName = 'AmauiIconMaterialBorderStyleRoundedW100Filled';

export default IconMaterialBorderStyleRoundedW100Filled;
