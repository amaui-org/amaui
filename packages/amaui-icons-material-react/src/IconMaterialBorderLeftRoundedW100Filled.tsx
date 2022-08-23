import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderLeftRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderLeftRoundedW100Filled'
      short_name='BorderLeft'

      {...props}
    >
      <path d="M19.5 8.5V7.5H20.5V8.5ZM11.5 8.5V7.5H12.5V8.5ZM11.5 12.5V11.5H12.5V12.5ZM19.5 12.5V11.5H20.5V12.5ZM15.5 4.5V3.5H16.5V4.5ZM19.5 4.5V3.5H20.5V4.5ZM11.5 4.5V3.5H12.5V4.5ZM7.5 4.5V3.5H8.5V4.5ZM15.5 12.5V11.5H16.5V12.5ZM7.5 20.5V19.5H8.5V20.5ZM11.5 20.5V19.5H12.5V20.5ZM4 20.5Q3.8 20.5 3.65 20.35Q3.5 20.2 3.5 20V4Q3.5 3.775 3.65 3.637Q3.8 3.5 4 3.5Q4.225 3.5 4.363 3.637Q4.5 3.775 4.5 4V20Q4.5 20.2 4.363 20.35Q4.225 20.5 4 20.5ZM15.5 20.5V19.5H16.5V20.5ZM19.5 16.5V15.5H20.5V16.5ZM7.5 12.5V11.5H8.5V12.5ZM19.5 20.5V19.5H20.5V20.5ZM11.5 16.5V15.5H12.5V16.5Z"/>
    </Icon>
  );
});

IconMaterialBorderLeftRoundedW100Filled.displayName = 'AmauiIconMaterialBorderLeftRoundedW100Filled';

export default IconMaterialBorderLeftRoundedW100Filled;
