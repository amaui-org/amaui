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
      <path d="M680-80v-120H560v-80h120v-120h80v120h120v80H760v120h-80Zm-200 0q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 12-.5 24.5T797-467q-18-6-38.5-9.5T718-480q-56 1-103.5 24.5T534-392l-17-97q20-10 31.5-29t11.5-42q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 23 11.5 42t31.5 29l-23 129h92q-15 26-23.5 56.5T480-240q0 39 12.5 75.5T528-96q-12 5-24 9t-24 7Z"/>
    </Icon>
  );
});

IconMaterialEncryptedAddFilled.displayName = 'AmauiIconMaterialEncryptedAddFilled';

export default IconMaterialEncryptedAddFilled;
