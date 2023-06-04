import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVibrationW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VibrationW100'

      short_name='Vibration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1.9 14.35v-4.7h.7v4.7Zm2.7 2v-8.7h.7v8.7Zm16.8-2v-4.7h.7v4.7Zm-2.7 2v-8.7h.7v8.7ZM7.3 19.7V4.3h9.4v15.4ZM8 19h8V5H8ZM8 5v14Z"/>
    </Icon>
  );
});

IconMaterialVibrationW100.displayName = 'AmauiIconMaterialVibrationW100';

export default IconMaterialVibrationW100;
