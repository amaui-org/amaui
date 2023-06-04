import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSupervisedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSupervisedW100'

      short_name='FolderSupervised'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 784v32-400 368Zm-28 60V348h308l40 40h348v140q-7-4-13.5-7t-14.5-6v-99H160v400h297q2 8 4 14.5t5 13.5H132Zm448 0v-2q0-32 32-49t92-17q60 0 92 17t32 49v2H580Zm124-140q-23 0-38.5-15.5T650 650q0-23 15.5-38.5T704 596q23 0 38.5 15.5T758 650q0 23-15.5 38.5T704 704Z"/>
    </Icon>
  );
});

IconMaterialFolderSupervisedW100.displayName = 'AmauiIconMaterialFolderSupervisedW100';

export default IconMaterialFolderSupervisedW100;
