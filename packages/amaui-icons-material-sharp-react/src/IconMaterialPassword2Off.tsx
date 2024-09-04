import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPassword2Off = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Password2Off'

      short_name='Password2Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm640 0q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-220-54L414-660q14-10 31-15t35-5q50 0 85 35t35 85q0 18-5 35t-15 31ZM792-56 648-200H80v-80h488L56-792l56-56 736 736-56 56Z"/>
    </Icon>
  );
});

IconMaterialPassword2Off.displayName = 'AmauiIconMaterialPassword2Off';

export default IconMaterialPassword2Off;
