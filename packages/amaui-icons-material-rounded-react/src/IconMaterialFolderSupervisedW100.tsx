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
      <path d="M160 784v32-400 368Zm32 60q-26 0-43-17t-17-43V408q0-26 17-43t43-17h223q12 0 23.5 5t19.5 13l22 22h288q26 0 43 17t17 43v80q-7-4-13.5-7t-14.5-6v-67q0-12-10-22t-22-10H160v368q0 12 10 22t22 10h265q2 8 4 14.5t5 13.5H192Zm388 0v-2q0-32 32-49t92-17q60 0 92 17t32 49v2H580Zm124-140q-23 0-38.5-15.5T650 650q0-23 15.5-38.5T704 596q23 0 38.5 15.5T758 650q0 23-15.5 38.5T704 704Z"/>
    </Icon>
  );
});

IconMaterialFolderSupervisedW100.displayName = 'AmauiIconMaterialFolderSupervisedW100';

export default IconMaterialFolderSupervisedW100;
