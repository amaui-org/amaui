import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOfflinePinOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinOff'

      short_name='OfflinePinOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280v-80h280l80 80H320ZM791-55l-91-91q-49 32-105 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-59 17-115t49-105l-91-91 57-57 736 736-57 57Zm23-205-58-58q22-37 33-78t11-84q0-134-93-227t-227-93q-43 0-84 11t-78 33l-58-58q49-32 105-49t115-17q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 59-17 115t-49 105Zm-172 56L204-642q-22 37-33 78t-11 84q0 134 93 227t227 93q43 0 84-11t78-33Zm-83-355ZM401-401Zm99-173 107-107 57 55-108 108-56-56Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinOff.displayName = 'AmauiIconMaterialOfflinePinOff';

export default IconMaterialOfflinePinOff;
