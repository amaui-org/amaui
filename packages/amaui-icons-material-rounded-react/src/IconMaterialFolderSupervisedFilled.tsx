import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderSupervisedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSupervisedFilled'

      short_name='FolderSupervised'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M560 896v-22q0-45 44-71.5T720 776q72 0 116 26.5t44 71.5v22H560Zm160-160q-33 0-56.5-23.5T640 656q0-33 23.5-56.5T720 576q33 0 56.5 23.5T800 656q0 33-23.5 56.5T720 736ZM160 896q-33 0-56.5-23.5T80 816V336q0-33 23.5-56.5T160 256h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880 416v130q-35-25-76-37.5T720 496q-117 0-198.5 81.5T440 776q0 32 6.5 62t20.5 58H160Z"/>
    </Icon>
  );
});

IconMaterialFolderSupervisedFilled.displayName = 'AmauiIconMaterialFolderSupervisedFilled';

export default IconMaterialFolderSupervisedFilled;
