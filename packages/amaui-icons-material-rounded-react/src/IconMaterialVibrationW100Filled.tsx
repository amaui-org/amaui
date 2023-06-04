import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVibrationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationW100Filled'

      short_name='Vibration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.25 14.35q-.15 0-.25-.1T1.9 14v-4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4q0 .15-.1.25t-.25.1Zm2.7 2q-.15 0-.25-.1T4.6 16V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8q0 .15-.1.25t-.25.1Zm16.8-2q-.15 0-.25-.1t-.1-.25v-4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4q0 .15-.1.25t-.25.1Zm-2.7 2q-.15 0-.25-.1t-.1-.25V8q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v8q0 .15-.1.25t-.25.1ZM8 19.7q-.3 0-.5-.2t-.2-.5V5q0-.3.2-.5t.5-.2h8q.3 0 .5.2t.2.5v14q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialVibrationW100Filled.displayName = 'AmauiIconMaterialVibrationW100Filled';

export default IconMaterialVibrationW100Filled;
