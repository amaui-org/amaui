import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExplosionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExplosionFilled'

      short_name='Explosion'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-28 346-160H160v-186L28-480l132-134v-186h186l134-132 134 132h186v186l132 134-132 134v186H614L480-28Zm0-112 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0 0L380-240H240v-140L140-480l100-100v-140h140l100-100 100 100h140v140l100 100-100 100v140H580L480-140Zm0-141 59-59h81v-81l59-59-59-59v-81h-81l-59-59-59 59h-81v81l-59 59 59 59v81h81l59 59Z"/>
    </Icon>
  );
});

IconMaterialExplosionFilled.displayName = 'AmauiIconMaterialExplosionFilled';

export default IconMaterialExplosionFilled;
