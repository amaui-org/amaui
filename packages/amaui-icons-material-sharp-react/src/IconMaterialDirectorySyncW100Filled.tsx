import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectorySyncW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectorySyncW100Filled'

      short_name='DirectorySync'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M224-266q-38-45-58-100t-20-114q0-143 107-238.5T506-814v-54l131 98-131 98v-54q-110 0-191 70t-81 176q0 45 15.5 86t44.5 75l-70 53ZM454-92l-131-98 131-98v54q110 0 191-70t81-176q0-45-15.5-86.5T666-642l70-53q38 45 58 100t20 115q0 143-107 238.5T454-146v54Z"/>
    </Icon>
  );
});

IconMaterialDirectorySyncW100Filled.displayName = 'AmauiIconMaterialDirectorySyncW100Filled';

export default IconMaterialDirectorySyncW100Filled;
