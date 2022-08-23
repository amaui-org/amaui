import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestoreFromTrashSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashSharpW100Filled'
      short_name='RestoreFromTrash'

      {...props}
    >
      <path d="M11.65 15.1H12.35V10.25L14.6 12.5L15.1 12L12 8.9L8.9 12L9.4 12.5L11.65 10.25ZM6.3 19.7V6H5.3V5.3H9V4.6H15V5.3H18.7V6H17.7V19.7Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashSharpW100Filled.displayName = 'AmauiIconMaterialRestoreFromTrashSharpW100Filled';

export default IconMaterialRestoreFromTrashSharpW100Filled;
