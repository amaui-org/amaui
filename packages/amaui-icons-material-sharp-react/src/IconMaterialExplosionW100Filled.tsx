import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExplosionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplosionW100Filled'

      short_name='Explosion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-100 367.775-212H212v-155.775L100-480l112-112.225V-748h155.775L480-860l112.225 112H748v155.775L860-480 748-367.775V-212H592.225L480-100Zm0-40 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0 0L380-240H240v-140L140-480l100-100v-140h140l100-100 100 100h140v140l100 100-100 100v140H580L480-140Zm0-158 53.96-53.96h74.08v-74.08L662-480l-53.96-53.96v-74.08h-74.08L480-662l-53.96 53.96h-74.08v74.08L298-480l53.96 53.96v74.08h74.08L480-298Z"/>
    </Icon>
  );
});

IconMaterialExplosionW100Filled.displayName = 'AmauiIconMaterialExplosionW100Filled';

export default IconMaterialExplosionW100Filled;
