import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSdkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdkW100'

      short_name='Sdk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-513l65-77h486l65 77v513H172Zm44-522h528l-34-40H250l-34 40Zm-16 494h560v-466H200v466Zm446-220-84 84 20 20 104-104-104-104-20 20 84 84Zm-330 0 84-84-20-20-104 104 104 104 20-20-84-84ZM200-200v-466 466Z"/>
    </Icon>
  );
});

IconMaterialSdkW100.displayName = 'AmauiIconMaterialSdkW100';

export default IconMaterialSdkW100;
