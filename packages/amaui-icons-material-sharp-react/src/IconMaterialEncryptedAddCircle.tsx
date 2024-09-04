import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEncryptedAddCircle = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EncryptedAddCircle'

      short_name='EncryptedAddCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-516v-244l320-120 320 120v200h-80v-144l-240-90-240 90v188q0 45 11.5 90t32.5 86.5q21 41.5 50.5 76.5t65.5 61v92q-107-55-173.5-165.5T160-516Zm320 22Zm180 334h40v-100h100v-40H700v-100h-40v100H560v40h100v100Zm20 80q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialEncryptedAddCircle.displayName = 'AmauiIconMaterialEncryptedAddCircle';

export default IconMaterialEncryptedAddCircle;
