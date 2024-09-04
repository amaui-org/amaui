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
      <path d="M680-132v-120H560v-28h120v-120h28v120h120v28H708v120h-28Zm-200-2q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 5-.5 11t-.5 11q-13-3-26-4.5t-27-1.5q-56 0-104 24t-80 65l-17-97q17-5 28.5-19.5T533-560q0-22-15.5-37.5T480-613q-22 0-37.5 15.5T427-560q0 18 11.5 32.5T467-508l-22 122h48q-16 26-24.5 56.5T460-266q0 34 9.5 65.5T497-140q-5 2-8.5 3t-8.5 3Z"/>
    </Icon>
  );
});

IconMaterialEncryptedAddW100Filled.displayName = 'AmauiIconMaterialEncryptedAddW100Filled';

export default IconMaterialEncryptedAddW100Filled;
