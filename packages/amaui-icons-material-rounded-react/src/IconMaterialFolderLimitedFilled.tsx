import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderLimitedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderLimitedFilled'

      short_name='FolderLimited'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v400q0 33-23.5 56.5T800-160H160Zm320-120q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm-46-248q11-5 22-8.5t24-3.5q42 0 71 29t29 71q0 13-3.5 24t-8.5 22L434-528Zm46 188q-42 0-71-29t-29-71q0-13 3.5-24t8.5-22l134 134q-11 5-22 8.5t-24 3.5Z"/>
    </Icon>
  );
});

IconMaterialFolderLimitedFilled.displayName = 'AmauiIconMaterialFolderLimitedFilled';

export default IconMaterialFolderLimitedFilled;
