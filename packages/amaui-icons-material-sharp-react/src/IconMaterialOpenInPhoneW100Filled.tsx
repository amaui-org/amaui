import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInPhoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInPhoneW100Filled'

      short_name='OpenInPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-268h28v146h400v-532H280v146h-28v-268h456v776H252Zm148-264-20-20 90-90H106v-28h364l-90-90 20-20 124 124-124 124Z"/>
    </Icon>
  );
});

IconMaterialOpenInPhoneW100Filled.displayName = 'AmauiIconMaterialOpenInPhoneW100Filled';

export default IconMaterialOpenInPhoneW100Filled;
