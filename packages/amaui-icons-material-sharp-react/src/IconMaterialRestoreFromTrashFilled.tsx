import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestoreFromTrashFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashFilled'

      short_name='RestoreFromTrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16h2v-4.15l1.6 1.55L16 12l-4-4-4 4 1.4 1.4 1.6-1.55Zm-6 5V6H4V4h5V3h6v1h5v2h-1v15Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashFilled.displayName = 'AmauiIconMaterialRestoreFromTrashFilled';

export default IconMaterialRestoreFromTrashFilled;
