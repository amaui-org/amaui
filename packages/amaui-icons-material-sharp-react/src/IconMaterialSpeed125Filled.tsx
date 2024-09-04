import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed125Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed125Filled'

      short_name='Speed125'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-280v-80h80v80h-80Zm400 0v-80h160v-80H660v-240h240v80H740v80h160v240H660Zm-280 0v-240h160v-80H380v-80h240v240H460v80h160v80H380Zm-240 0v-320H60v-80h160v400h-80Z"/>
    </Icon>
  );
});

IconMaterialSpeed125Filled.displayName = 'AmauiIconMaterialSpeed125Filled';

export default IconMaterialSpeed125Filled;
