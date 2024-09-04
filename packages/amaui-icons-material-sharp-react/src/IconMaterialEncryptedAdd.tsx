import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedAdd'

      short_name='EncryptedAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm0 400q-139-35-229.5-159.5T160-516v-244l320-120 320 120v262q0 9-1 19h-81q1-10 1.5-19t.5-18v-189l-240-90-240 90v189q0 121 68 220t172 132v84Zm200 0v-120H560v-80h120v-120h80v120h120v80H760v120h-80ZM420-360h120l-23-129q20-10 31.5-29t11.5-42q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 23 11.5 42t31.5 29l-23 129Z"/>
    </Icon>
  );
});

IconMaterialEncryptedAdd.displayName = 'AmauiIconMaterialEncryptedAdd';

export default IconMaterialEncryptedAdd;
