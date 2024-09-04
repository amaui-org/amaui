import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedOffFilled'

      short_name='EncryptedOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M444-360h44l-58-58-6 34q-2 9 4.5 16.5T444-360Zm218 174q-33 35-72.5 59T505-88q-6 2-12 3t-13 1q-4 0-25-4-135-45-215-166.5T160-516v-172l-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L662-186Zm138-519v189q0 33-5 65.5T780-386q-4 12-13 20t-20 10q-11 2-22.5-.5T703-369L551-522q5-8 7-17.5t2-20.5q0-33-23.5-56.5T480-640q-11 0-20 2t-17 7L316-758q-6-6-9-13t-3-15q0-12 6.5-22.5T330-824l122-45q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45Z"/>
    </Icon>
  );
});

IconMaterialEncryptedOffFilled.displayName = 'AmauiIconMaterialEncryptedOffFilled';

export default IconMaterialEncryptedOffFilled;
