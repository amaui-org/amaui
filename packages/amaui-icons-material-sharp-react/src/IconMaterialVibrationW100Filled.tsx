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
      <path d="M1.9 14.35v-4.7h.7v4.7Zm2.7 2v-8.7h.7v8.7Zm16.8-2v-4.7h.7v4.7Zm-2.7 2v-8.7h.7v8.7ZM7.3 19.7V4.3h9.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialVibrationW100Filled.displayName = 'AmauiIconMaterialVibrationW100Filled';

export default IconMaterialVibrationW100Filled;
