import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInPhoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInPhoneW100'

      short_name='OpenInPhone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-268h28v146h400v-532H280v146h-28v-268h456v776H252Zm28-94v66h400v-66H280Zm120-170-20-20 90-90H106v-28h364l-90-90 20-20 124 124-124 124ZM280-774h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialOpenInPhoneW100.displayName = 'AmauiIconMaterialOpenInPhoneW100';

export default IconMaterialOpenInPhoneW100;
