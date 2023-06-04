import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraRollW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollW100'

      short_name='CameraRoll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.7 18.7h-8.05v2H3.3V4.3h3v-2h3.4v2h2.95v2h8.05ZM20 18V7h-8V5H4v15h8v-2ZM9.8 16.7h1.4v-1.4H9.8Zm0-7h1.4V8.3H9.8Zm3.75 7h1.4v-1.4h-1.4Zm0-7h1.4V8.3h-1.4Zm3.75 7h1.4v-1.4h-1.4Zm0-7h1.4V8.3h-1.4ZM4 5v15Z"/>
    </Icon>
  );
});

IconMaterialCameraRollW100.displayName = 'AmauiIconMaterialCameraRollW100';

export default IconMaterialCameraRollW100;
