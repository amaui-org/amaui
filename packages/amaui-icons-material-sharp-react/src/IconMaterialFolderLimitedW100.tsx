import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFolderLimitedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderLimitedW100'

      short_name='FolderLimited'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h247l80 80h369v456H132Zm28-28h640v-400H448l-80-80H160v480Zm0 0v-480 480Zm320-88q54 0 91-37t37-91q0-54-37-91t-91-37q-54 0-91 37t-37 91q0 54 37 91t91 37Zm-60-208q13-10 28-15t32-5q42 0 71 29t29 71q0 17-5 32t-15 28L420-536Zm60 180q-42 0-71-29t-29-71q0-17 5-32t15-28l140 140q-13 10-28 15t-32 5Z"/>
    </Icon>
  );
});

IconMaterialFolderLimitedW100.displayName = 'AmauiIconMaterialFolderLimitedW100';

export default IconMaterialFolderLimitedW100;
