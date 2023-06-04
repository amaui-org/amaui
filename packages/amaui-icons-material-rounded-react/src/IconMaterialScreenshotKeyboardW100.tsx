import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotKeyboardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotKeyboardW100'

      short_name='ScreenshotKeyboard'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 682q-44 0-75-31t-31-75q0-44 31-75t75-31q44 0 75 31t31 75q0 44-31 75t-75 31Zm0 28q56 0 95-39t39-95q0-56-39-95t-95-39q-56 0-95 39t-39 95q0 56 39 95t95 39ZM192 844q-26 0-43-17t-17-43V368q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22V368q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0V336v480Z"/>
    </Icon>
  );
});

IconMaterialScreenshotKeyboardW100.displayName = 'AmauiIconMaterialScreenshotKeyboardW100';

export default IconMaterialScreenshotKeyboardW100;
