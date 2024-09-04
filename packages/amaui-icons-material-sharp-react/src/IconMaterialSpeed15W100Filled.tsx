import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed15W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed15W100Filled'

      short_name='Speed15'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M318-306v-320h-80v-28h108v348h-28Zm108 0v-28h28v28h-28Zm108 0v-28h160v-132H534v-188h188v28H562v132h160v188H534Z"/>
    </Icon>
  );
});

IconMaterialSpeed15W100Filled.displayName = 'AmauiIconMaterialSpeed15W100Filled';

export default IconMaterialSpeed15W100Filled;
