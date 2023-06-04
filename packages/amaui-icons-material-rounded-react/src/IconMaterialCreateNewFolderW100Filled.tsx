import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreateNewFolderW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderW100Filled'

      short_name='CreateNewFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 15.35q.15 0 .25-.1t.1-.25v-1.65H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.65V11q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.65H13q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65V15q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .575.112.275.113.5.338l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderW100Filled.displayName = 'AmauiIconMaterialCreateNewFolderW100Filled';

export default IconMaterialCreateNewFolderW100Filled;
