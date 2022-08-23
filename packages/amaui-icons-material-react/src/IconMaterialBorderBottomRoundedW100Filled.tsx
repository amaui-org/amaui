import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderBottomRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderBottomRoundedW100Filled'
      short_name='BorderBottom'

      {...props}
    >
      <path d="M7.5 4.5V3.5H8.5V4.5ZM7.5 12.5V11.5H8.5V12.5ZM11.5 12.5V11.5H12.5V12.5ZM11.5 4.5V3.5H12.5V4.5ZM3.5 8.5V7.5H4.5V8.5ZM3.5 4.5V3.5H4.5V4.5ZM3.5 12.5V11.5H4.5V12.5ZM3.5 16.5V15.5H4.5V16.5ZM11.5 8.5V7.5H12.5V8.5ZM19.5 16.5V15.5H20.5V16.5ZM19.5 12.5V11.5H20.5V12.5ZM4 20.5Q3.8 20.5 3.65 20.35Q3.5 20.2 3.5 20Q3.5 19.775 3.65 19.637Q3.8 19.5 4 19.5H20Q20.225 19.5 20.363 19.637Q20.5 19.775 20.5 20Q20.5 20.2 20.363 20.35Q20.225 20.5 20 20.5ZM19.5 8.5V7.5H20.5V8.5ZM15.5 4.5V3.5H16.5V4.5ZM11.5 16.5V15.5H12.5V16.5ZM19.5 4.5V3.5H20.5V4.5ZM15.5 12.5V11.5H16.5V12.5Z"/>
    </Icon>
  );
});

IconMaterialBorderBottomRoundedW100Filled.displayName = 'AmauiIconMaterialBorderBottomRoundedW100Filled';

export default IconMaterialBorderBottomRoundedW100Filled;
