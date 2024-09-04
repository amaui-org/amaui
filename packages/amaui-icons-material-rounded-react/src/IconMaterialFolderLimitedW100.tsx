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
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h162q12 0 23.5 5t19.5 13l62 62h309q26 0 43 17t17 43v336q0 26-17 43t-43 17H192Zm0-28h576q14 0 23-9t9-23v-336q0-14-9-23t-23-9H448l-71-71q-5-5-10.5-7t-11.5-2H192q-14 0-23 9t-9 23v416q0 14 9 23t23 9Zm-32 0v-480 480Zm320-88q54 0 91-37t37-91q0-54-37-91t-91-37q-54 0-91 37t-37 91q0 54 37 91t91 37Zm-60-208q13-10 28-15t32-5q42 0 71 29t29 71q0 17-5 32t-15 28L420-536Zm60 180q-42 0-71-29t-29-71q0-17 5-32t15-28l140 140q-13 10-28 15t-32 5Z"/>
    </Icon>
  );
});

IconMaterialFolderLimitedW100.displayName = 'AmauiIconMaterialFolderLimitedW100';

export default IconMaterialFolderLimitedW100;
