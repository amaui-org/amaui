import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlashlightOnW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashlightOnW100'

      short_name='FlashlightOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 20.7V10.6l-2-3V3.3h9.4v4.3l-2 3v10.1Zm2.7-5.85q-.35 0-.6-.25t-.25-.6q0-.35.25-.6t.6-.25q.35 0 .6.25t.25.6q0 .35-.25.6t-.6.25Zm-4-9.2h8V4H8Zm8 .7H8V7.4l2 3V20h4v-9.6l2-3ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialFlashlightOnW100.displayName = 'AmauiIconMaterialFlashlightOnW100';

export default IconMaterialFlashlightOnW100;
