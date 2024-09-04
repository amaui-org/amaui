import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedAddFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedAddFilled'

      short_name='EncryptedAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-80q-17 0-28.5-11.5T680-120v-80h-80q-17 0-28.5-11.5T560-240q0-17 11.5-28.5T600-280h80v-80q0-17 11.5-28.5T720-400q17 0 28.5 11.5T760-360v80h80q17 0 28.5 11.5T880-240q0 17-11.5 28.5T840-200h-80v80q0 17-11.5 28.5T720-80Zm-247-2q-135-33-224-157.5T160-516v-189q0-25 14.5-45t37.5-29l240-90q14-5 28-5t28 5l240 90q23 9 37.5 29t14.5 45v191q0 18-14 29t-32 8q-9-2-18-2.5t-18-.5q-56 1-103 24.5T535-392l-18-97q20-10 31.5-29t11.5-42q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 23 11.5 42t31.5 29l-19 105q-2 9 4.5 16.5T444-360h68q-15 26-23.5 56.5T480-240q0 28 6.5 55.5T506-132q13 22-.5 40T473-82Z"/>
    </Icon>
  );
});

IconMaterialEncryptedAddFilled.displayName = 'AmauiIconMaterialEncryptedAddFilled';

export default IconMaterialEncryptedAddFilled;
