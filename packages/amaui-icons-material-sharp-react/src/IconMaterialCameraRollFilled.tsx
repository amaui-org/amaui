import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraRollFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraRollFilled'

      short_name='CameraRoll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M22 20h-8v2H2V3h3V1h6v2h3v2h8ZM9 17h2v-2H9Zm0-7h2V8H9Zm4 7h2v-2h-2Zm0-7h2V8h-2Zm4 7h2v-2h-2Zm0-7h2V8h-2Z"/>
    </Icon>
  );
});

IconMaterialCameraRollFilled.displayName = 'AmauiIconMaterialCameraRollFilled';

export default IconMaterialCameraRollFilled;
