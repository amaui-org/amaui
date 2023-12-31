import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonEditW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonEditW100Filled'

      short_name='PersonEdit'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M572-172v-78l231-230 77 78-230 230h-78Zm-360-60v-52q0-22 13.5-41.5T262-356q55-26 109.5-39T480-408q24 0 48.5 3t49.5 8L472-292v60H212Zm591-132 37-38-37-38-38 38 38 38ZM480-512q-45 0-76.5-31.5T372-620q0-45 31.5-76.5T480-728q45 0 76.5 31.5T588-620q0 45-31.5 76.5T480-512Z"/>
    </Icon>
  );
});

IconMaterialPersonEditW100Filled.displayName = 'AmauiIconMaterialPersonEditW100Filled';

export default IconMaterialPersonEditW100Filled;
