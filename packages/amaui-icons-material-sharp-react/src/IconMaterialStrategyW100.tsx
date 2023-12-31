import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrategyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrategyW100'

      short_name='Strategy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m246-528-114-65v-130l114-65 114 65v130l-114 65Zm0-32 86-49v-98l-86-49-86 49v98l86 49Zm402 27v-32l100 58v250L534-132 320-257v-250l100-58v32l-72 42v218.107L534-165l186-107.893V-491l-72-42ZM520-400v-428h308l-62 94 62 94H548v240h-28Zm14 51ZM246-658Z"/>
    </Icon>
  );
});

IconMaterialStrategyW100.displayName = 'AmauiIconMaterialStrategyW100';

export default IconMaterialStrategyW100;
