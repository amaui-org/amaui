import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed075Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed075Filled'

      short_name='Speed075'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280v-80h80v80h-80Zm360 0v-80h160v-80H560v-240h240v80H640v80h160v240H560Zm-200 0 80-320H280v-80h240v72l-80 328h-80Z"/>
    </Icon>
  );
});

IconMaterialSpeed075Filled.displayName = 'AmauiIconMaterialSpeed075Filled';

export default IconMaterialSpeed075Filled;
