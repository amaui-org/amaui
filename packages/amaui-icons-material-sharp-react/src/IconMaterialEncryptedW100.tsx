import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedW100'

      short_name='Encrypted'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M445-386h70l-22-122q17-5 28.5-19.639Q533-542.279 533-560q0-21.862-15.597-37.431Q501.805-613 479.903-613 458-613 442.5-597.431T427-560q0 17.721 11.5 32.361Q450-513 467-508l-22 122Zm35 252q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-315Z"/>
    </Icon>
  );
});

IconMaterialEncryptedW100.displayName = 'AmauiIconMaterialEncryptedW100';

export default IconMaterialEncryptedW100;
