import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSupervised = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSupervised'

      short_name='FolderSupervised'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 816v-5 5-400 400Zm-80 80V256h320l80 80h400v210q-18-13-38-22t-42-16v-92H160v400h283q3 21 9 41t15 39H80Zm480 0v-22q0-45 44-71.5T720 776q72 0 116 26.5t44 71.5v22H560Zm160-160q-33 0-56.5-23.5T640 656q0-33 23.5-56.5T720 576q33 0 56.5 23.5T800 656q0 33-23.5 56.5T720 736Z"/>
    </Icon>
  );
});

IconMaterialFolderSupervised.displayName = 'AmauiIconMaterialFolderSupervised';

export default IconMaterialFolderSupervised;
