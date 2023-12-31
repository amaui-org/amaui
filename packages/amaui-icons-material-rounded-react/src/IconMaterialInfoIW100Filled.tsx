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
      <path d="M480-680q-23 0-38.5-15.5T426-734q0-23 15.5-38.5T480-788q23 0 38.5 15.5T534-734q0 23-15.5 38.5T480-680Zm.118 508Q466-172 456-181.917q-10-9.916-10-24.083v-320q0-14.167 9.882-24.083 9.883-9.917 24-9.917Q494-560 504-550.083q10 9.916 10 24.083v320q0 14.167-9.882 24.083-9.883 9.917-24 9.917Z"/>
    </Icon>
  );
});

IconMaterialInfoIW100Filled.displayName = 'AmauiIconMaterialInfoIW100Filled';

export default IconMaterialInfoIW100Filled;
