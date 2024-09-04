import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflinePinOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinOffFilled'

      short_name='OfflinePinOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m791-55-91-91q-49 32-105 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-59 17-115t49-105l-91-91 57-57 736 736-57 57ZM320-280h246l-80-80H320v80Zm494 20L556-518l108-108-57-55-107 107-240-240q49-32 105-49t115-17q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 59-17 115t-49 105Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinOffFilled.displayName = 'AmauiIconMaterialOfflinePinOffFilled';

export default IconMaterialOfflinePinOffFilled;
