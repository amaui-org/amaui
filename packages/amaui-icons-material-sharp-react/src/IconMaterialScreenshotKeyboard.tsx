import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotKeyboard = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotKeyboard'

      short_name='ScreenshotKeyboard'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 656q-33 0-56.5-23.5T400 576q0-33 23.5-56.5T480 496q33 0 56.5 23.5T560 576q0 33-23.5 56.5T480 656Zm0 80q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47ZM80 896V256h800v640H80Zm80-80h640V336H160v480Zm0 0V336v480Z"/>
    </Icon>
  );
});

IconMaterialScreenshotKeyboard.displayName = 'AmauiIconMaterialScreenshotKeyboard';

export default IconMaterialScreenshotKeyboard;
