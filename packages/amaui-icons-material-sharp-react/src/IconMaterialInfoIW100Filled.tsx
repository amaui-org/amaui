import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInfoIW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfoIW100Filled'

      short_name='InfoI'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q-23 0-38.5-15.5T426-734q0-23 15.5-38.5T480-788q23 0 38.5 15.5T534-734q0 23-15.5 38.5T480-680Zm-34 508v-388h68v388h-68Z"/>
    </Icon>
  );
});

IconMaterialInfoIW100Filled.displayName = 'AmauiIconMaterialInfoIW100Filled';

export default IconMaterialInfoIW100Filled;
