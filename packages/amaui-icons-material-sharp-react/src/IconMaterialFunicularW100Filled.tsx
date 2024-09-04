import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunicularW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunicularW100Filled'

      short_name='Funicular'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-92v-29l213-59v-132H172v-408h-40v-28h114v-40h468v40h114v28h-40v338H657v106l211-58v29L92-92Zm253-99 272-74v-117H494v70H345v121ZM200-428h266v-292H200v292Zm294-70h266v-222H494v222Z"/>
    </Icon>
  );
});

IconMaterialFunicularW100Filled.displayName = 'AmauiIconMaterialFunicularW100Filled';

export default IconMaterialFunicularW100Filled;
