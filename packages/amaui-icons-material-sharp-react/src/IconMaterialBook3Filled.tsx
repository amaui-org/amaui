import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book3Filled'

      short_name='Book3'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-80q-59 0-99.5-40.5T160-220v-520q0-58 40.5-99t99.5-41h500v600q-26 0-43 17.5T740-220q0 26 17 43t43 17v80H300Zm49-360h49l25-71h113l25 71h49L504-720h-50L349-440Zm88-112 41-116h3l41 116h-85ZM300-160h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"/>
    </Icon>
  );
});

IconMaterialBook3Filled.displayName = 'AmauiIconMaterialBook3Filled';

export default IconMaterialBook3Filled;
