import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotKeyboardFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotKeyboardFilled'

      short_name='ScreenshotKeyboard'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 576Zm0 160q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47ZM80 896V256h800v640H80Z"/>
    </Icon>
  );
});

IconMaterialScreenshotKeyboardFilled.displayName = 'AmauiIconMaterialScreenshotKeyboardFilled';

export default IconMaterialScreenshotKeyboardFilled;
