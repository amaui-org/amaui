import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreateNewFolderW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderW100'

      short_name='CreateNewFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 15.35q.15 0 .25-.1t.1-.25v-1.65H17q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-1.65V11q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25v1.65H13q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1h1.65V15q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .588.125.287.125.487.325l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425ZM4 7.8v9.4q0 .35.225.575Q4.45 18 4.8 18h14.4q.35 0 .575-.225Q20 17.55 20 17.2V8.8q0-.35-.225-.575Q19.55 8 19.2 8h-7.475l-1-1H4.8q-.35 0-.575.225Q4 7.45 4 7.8Zm0 0V7v11V17.2Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderW100.displayName = 'AmauiIconMaterialCreateNewFolderW100';

export default IconMaterialCreateNewFolderW100;
