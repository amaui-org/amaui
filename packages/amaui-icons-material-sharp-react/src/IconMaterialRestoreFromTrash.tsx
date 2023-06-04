import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRestoreFromTrash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrash'

      short_name='RestoreFromTrash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 16h2v-4.15l1.6 1.55L16 12l-4-4-4 4 1.4 1.4 1.6-1.55Zm-6 5V6H4V4h5V3h6v1h5v2h-1v15Zm2-2h10V6H7ZM7 6v13Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrash.displayName = 'AmauiIconMaterialRestoreFromTrash';

export default IconMaterialRestoreFromTrash;
