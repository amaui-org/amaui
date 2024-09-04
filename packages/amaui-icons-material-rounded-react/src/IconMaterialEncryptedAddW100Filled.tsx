import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedAddW100Filled'

      short_name='EncryptedAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M693.96-132q-5.96 0-9.96-4.02-4-4.03-4-9.98v-106H574q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h106v-106q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v106h106q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H708v106q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM475-136q-113-38-188-142.5t-75-237.78V-682q0-19.26 10.88-34.66Q233.75-732.07 251-739l208-77q11-4 21-4t21 4l208 77q17.25 6.93 28.13 22.34Q748-701.26 748-682v159q0 11-8.5 18.5t-19.83 5.7Q714-500 707.33-500H694q-56 0-103.5 24T511-411l-18-97q17-5 28.5-19.64T533-560q0-21.86-15.6-37.43Q501.81-613 479.9-613q-21.9 0-37.4 15.57T427-560q0 17.72 11.5 32.36T467-508l-19 104q-2 6.75 3.13 12.37Q456.25-386 463-386h30q-16 26-24.5 56.5T460-266q0 29.01 7.5 57.51Q475-180 489-154q5 8-.5 14.5T475-136Z"/>
    </Icon>
  );
});

IconMaterialEncryptedAddW100Filled.displayName = 'AmauiIconMaterialEncryptedAddW100Filled';

export default IconMaterialEncryptedAddW100Filled;
