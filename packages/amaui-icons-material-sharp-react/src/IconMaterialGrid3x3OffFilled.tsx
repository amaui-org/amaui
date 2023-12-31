import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid3x3OffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3OffFilled'

      short_name='Grid3x3Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m753-320-80-80h127v80h-47ZM640-433 433-640h127v-160h80v160h160v80H640v127ZM400-673l-80-80v-47h80v127ZM791-56 640-207v47h-80v-127l-33-33H400v160h-80v-160H160v-80h160v-127l-33-33H160v-80h47L56-791l56-57 736 736-57 56Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3OffFilled.displayName = 'AmauiIconMaterialGrid3x3OffFilled';

export default IconMaterialGrid3x3OffFilled;
