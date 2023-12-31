import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderData = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderData'

      short_name='FolderData'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-40q-33 0-56.5-23.5T520-120q0-23 11-41t29-29v-221q-18-11-29-28.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 23-11 40.5T640-411v115l160-53v-62q-18-11-29-28.5T760-480q0-33 23.5-56.5T840-560q33 0 56.5 23.5T920-480q0 23-11 40.5T880-411v119l-240 80v22q18 11 29 29t11 41q0 33-23.5 56.5T600-40ZM160-240v-480 480Zm-80 80v-640h320l80 80h400v80H447l-80-80H160v480h280v80H80Z"/>
    </Icon>
  );
});

IconMaterialFolderData.displayName = 'AmauiIconMaterialFolderData';

export default IconMaterialFolderData;
