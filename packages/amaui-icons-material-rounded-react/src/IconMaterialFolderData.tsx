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
      <path d="M600-40q-33 0-56.5-23.5T520-120q0-23 11-41t29-29v-221q-18-11-29-28.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 23-11 40.5T640-411v115l160-53v-62q-18-11-29-28.5T760-480q0-33 23.5-56.5T840-560q33 0 56.5 23.5T920-480q0 23-11 40.5T880-411v61q0 26-15 47t-40 29l-185 62v22q18 11 29 29t11 41q0 33-23.5 56.5T600-40ZM160-240v-480 480Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640H447l-80-80H160v480h240q17 0 28.5 11.5T440-200q0 17-11.5 28.5T400-160H160Z"/>
    </Icon>
  );
});

IconMaterialFolderData.displayName = 'AmauiIconMaterialFolderData';

export default IconMaterialFolderData;
