import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIosW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosW100Filled'

      short_name='Ios'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M183-614v-40h40v40h-40Zm6 308v-228h28v228h-28Zm120 0v-348h188v348H309Zm28-28h132v-292H337v292Zm252 28v-28h160v-132H589v-188h188v28H617v132h160v188H589Z"/>
    </Icon>
  );
});

IconMaterialIosW100Filled.displayName = 'AmauiIconMaterialIosW100Filled';

export default IconMaterialIosW100Filled;
