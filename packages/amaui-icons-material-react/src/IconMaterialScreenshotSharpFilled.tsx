import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialScreenshotSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotSharpFilled'
      short_name='Screenshot'

      {...props}
    >
      <path d="M8 11V7H12V8.5H9.5V11ZM12 17V15.5H14.5V13H16V17ZM5 23V1H19V23ZM7 18H17V6H7Z"/>
    </Icon>
  );
});

IconMaterialScreenshotSharpFilled.displayName = 'AmauiIconMaterialScreenshotSharpFilled';

export default IconMaterialScreenshotSharpFilled;
