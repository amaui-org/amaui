import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedW100Filled'

      short_name='Encrypted'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M463-386h34q6.75 0 11.875-5.625T512-404l-19-104q17-5 28.5-19.639Q533-542.279 533-560q0-21.862-15.597-37.431Q501.805-613 479.903-613 458-613 442.5-597.431T427-560q0 17.721 11.5 32.361Q450-513 467-508l-19 104q-2 6.75 3.125 12.375T463-386Zm17 247q-5 0-11-1t-11.021-3Q345-188 278.5-291.5 212-395 212-516v-166q0-19.257 10.875-34.662Q233.75-732.068 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.932 28.125 22.338Q748-701.257 748-682v166q0 121-66.5 224.5T502.021-143Q497-141 491-140q-6 1-11 1Z"/>
    </Icon>
  );
});

IconMaterialEncryptedW100Filled.displayName = 'AmauiIconMaterialEncryptedW100Filled';

export default IconMaterialEncryptedW100Filled;
