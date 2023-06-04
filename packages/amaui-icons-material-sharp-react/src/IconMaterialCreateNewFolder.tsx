import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCreateNewFolder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolder'

      short_name='CreateNewFolder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M14 16h2v-2h2v-2h-2v-2h-2v2h-2v2h2ZM2 20V4h8l2 2h10v14Zm2-2h16V8h-8.825l-2-2H4Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolder.displayName = 'AmauiIconMaterialCreateNewFolder';

export default IconMaterialCreateNewFolder;
