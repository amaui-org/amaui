import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotSharpW700Filled'
      short_name='Screenshot'

      {...props}
    >
      <path d="M8.375 11.375V7.375H12.375V8.875H9.875V11.375ZM11.625 16.625V15.125H14.125V12.625H15.625V16.625ZM4.225 23.775V0.225H19.775V23.775ZM7.375 17.625H16.625V6.375H7.375Z"/>
    </Icon>
  )
});

export default IconMaterialScreenshotSharpW700Filled;
