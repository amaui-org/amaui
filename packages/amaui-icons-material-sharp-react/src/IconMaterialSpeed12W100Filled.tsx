import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed12W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed12W100Filled'

      short_name='Speed12'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-306v-320h-80v-28h108v348h-28Zm108 0v-28h28v28h-28Zm108 0v-188h160v-132H534v-28h188v188H562v132h160v28H534Z"/>
    </Icon>
  );
});

IconMaterialSpeed12W100Filled.displayName = 'AmauiIconMaterialSpeed12W100Filled';

export default IconMaterialSpeed12W100Filled;
