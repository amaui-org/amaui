import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunicularW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunicularW100'

      short_name='Funicular'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-92v-29l213-59v-132H172v-408h-40v-28h114v-40h468v40h114v28h-40v338H657v106l211-58v29L92-92Zm253-99 272-74v-117H494v70H345v121ZM200-340h266v-60H200v60Zm294-70h266v-60H494v60Zm-294-18h266v-292H200v292Zm294-70h266v-222H494v222Zm-28 158v-60 60Zm28-70v-60 60Z"/>
    </Icon>
  );
});

IconMaterialFunicularW100.displayName = 'AmauiIconMaterialFunicularW100';

export default IconMaterialFunicularW100;
