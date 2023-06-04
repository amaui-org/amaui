import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestoreFromTrashW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashW100'

      short_name='RestoreFromTrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 15.1h.7v-4.85l2.25 2.25.5-.5L12 8.9 8.9 12l.5.5 2.25-2.25ZM6.3 19.7V6h-1v-.7H9v-.7h6v.7h3.7V6h-1v13.7ZM7 19h10V6H7ZM7 6v13Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashW100.displayName = 'AmauiIconMaterialRestoreFromTrashW100';

export default IconMaterialRestoreFromTrashW100;
