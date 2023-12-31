import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDestructionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DestructionW100Filled'

      short_name='Destruction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-239h616v239H172Zm96-299-128-75 193-33-53-192 162 116 99-173 33 196 192-53-115 162 92 52H268Z"/>
    </Icon>
  );
});

IconMaterialDestructionW100Filled.displayName = 'AmauiIconMaterialDestructionW100Filled';

export default IconMaterialDestructionW100Filled;
