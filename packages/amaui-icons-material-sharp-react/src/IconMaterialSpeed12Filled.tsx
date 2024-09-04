import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed12Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed12Filled'

      short_name='Speed12'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-320h-80v-80h160v400h-80Zm120 0v-80h80v80h-80Zm120 0v-240h160v-80H520v-80h240v240H600v80h160v80H520Z"/>
    </Icon>
  );
});

IconMaterialSpeed12Filled.displayName = 'AmauiIconMaterialSpeed12Filled';

export default IconMaterialSpeed12Filled;
