import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBorderHorizontalRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderHorizontalRoundedW100'
      short_name='BorderHorizontal'

      {...props}
    >
      <path d="M3.5 4.5V3.5H4.5V4.5ZM7.5 4.5V3.5H8.5V4.5ZM11.5 4.5V3.5H12.5V4.5ZM15.5 4.5V3.5H16.5V4.5ZM19.5 4.5V3.5H20.5V4.5ZM3.5 8.5V7.5H4.5V8.5ZM11.5 8.5V7.5H12.5V8.5ZM19.5 8.5V7.5H20.5V8.5ZM20 12.5H4Q3.8 12.5 3.65 12.35Q3.5 12.2 3.5 12Q3.5 11.775 3.65 11.637Q3.8 11.5 4 11.5H20Q20.225 11.5 20.363 11.637Q20.5 11.775 20.5 12Q20.5 12.2 20.363 12.35Q20.225 12.5 20 12.5ZM3.5 16.5V15.5H4.5V16.5ZM11.5 16.5V15.5H12.5V16.5ZM19.5 16.5V15.5H20.5V16.5ZM3.5 20.5V19.5H4.5V20.5ZM7.5 20.5V19.5H8.5V20.5ZM11.5 20.5V19.5H12.5V20.5ZM15.5 20.5V19.5H16.5V20.5ZM19.5 20.5V19.5H20.5V20.5Z"/>
    </Icon>
  );
});

IconMaterialBorderHorizontalRoundedW100.displayName = 'AmauiIconMaterialBorderHorizontalRoundedW100';

export default IconMaterialBorderHorizontalRoundedW100;
