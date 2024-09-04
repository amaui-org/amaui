import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedAddW100'

      short_name='EncryptedAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-479Zm0 345q-115-36-191.5-142T212-516v-208l268-100 268 100v217.18q0 4.18-.34 8.82H720v-207l-240-89-240 89v189q0 121 68 220t172 132v30Zm200 2v-120H560v-28h120v-120h28v120h120v28H708v120h-28ZM445-386h70l-22-122q17-5 28.5-19.64T533-560q0-21.86-15.6-37.43Q501.81-613 479.9-613q-21.9 0-37.4 15.57T427-560q0 17.72 11.5 32.36T467-508l-22 122Z"/>
    </Icon>
  );
});

IconMaterialEncryptedAddW100.displayName = 'AmauiIconMaterialEncryptedAddW100';

export default IconMaterialEncryptedAddW100;
