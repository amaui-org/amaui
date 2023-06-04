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
      <path d="M479.805 682Q436 682 405 650.805q-31-31.194-31-75Q374 532 405.195 501q31.194-31 75-31Q524 470 555 501.195q31 31.194 31 75Q586 620 554.805 651q-31.194 31-75 31Zm.195 28q56 0 95-39t39-95q0-56-39-95t-95-39q-56 0-95 39t-39 95q0 56 39 95t95 39ZM132 844V308h696v536H132Zm28-28h640V336H160v480Zm0 0V336v480Z"/>
    </Icon>
  );
});

IconMaterialScreenshotKeyboardW100.displayName = 'AmauiIconMaterialScreenshotKeyboardW100';

export default IconMaterialScreenshotKeyboardW100;
