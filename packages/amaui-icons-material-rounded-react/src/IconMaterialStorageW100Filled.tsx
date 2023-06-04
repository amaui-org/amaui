import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStorageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StorageW100Filled'

      short_name='Storage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.4 19.45q-.6 0-1.025-.425Q2.95 18.6 2.95 18q0-.6.425-1.025.425-.425 1.025-.425h15.2q.6 0 1.025.425.425.425.425 1.025 0 .6-.425 1.025-.425.425-1.025.425Zm.95-.7h1.5v-1.5h-1.5ZM4.4 7.45q-.6 0-1.025-.425Q2.95 6.6 2.95 6q0-.6.425-1.025Q3.8 4.55 4.4 4.55h15.2q.6 0 1.025.425.425.425.425 1.025 0 .6-.425 1.025-.425.425-1.025.425Zm.95-.7h1.5v-1.5h-1.5Zm-.95 6.7q-.6 0-1.025-.425Q2.95 12.6 2.95 12q0-.6.425-1.025.425-.425 1.025-.425h15.2q.6 0 1.025.425.425.425.425 1.025 0 .6-.425 1.025-.425.425-1.025.425Zm.95-.7h1.5v-1.5h-1.5Z"/>
    </Icon>
  );
});

IconMaterialStorageW100Filled.displayName = 'AmauiIconMaterialStorageW100Filled';

export default IconMaterialStorageW100Filled;
