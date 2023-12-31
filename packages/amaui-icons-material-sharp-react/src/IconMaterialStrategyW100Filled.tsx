import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrategyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrategyW100Filled'

      short_name='Strategy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M534-132 320-257v-250l100-58v265h228v-265l100 58v250L534-132ZM246-528l-114-65v-130l114-65 114 65v130l-114 65Zm274 128v-428h308l-62 94 62 94H548v240h-28Z"/>
    </Icon>
  );
});

IconMaterialStrategyW100Filled.displayName = 'AmauiIconMaterialStrategyW100Filled';

export default IconMaterialStrategyW100Filled;
