import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderW100Filled'

      short_name='Folder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .588.125.287.125.487.325l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialFolderW100Filled.displayName = 'AmauiIconMaterialFolderW100Filled';

export default IconMaterialFolderW100Filled;
