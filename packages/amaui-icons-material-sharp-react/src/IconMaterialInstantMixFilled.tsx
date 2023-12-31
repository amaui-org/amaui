import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstantMixFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstantMixFilled'

      short_name='InstantMix'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-280h-80v-80h240v80h-80v280h-80Zm0-440v-200h80v200h-80Zm160 0v-80h80v-120h80v120h80v80H360Zm80 440v-360h80v360h-80Zm240 0v-120h-80v-80h240v80h-80v120h-80Zm0-280v-360h80v360h-80Z"/>
    </Icon>
  );
});

IconMaterialInstantMixFilled.displayName = 'AmauiIconMaterialInstantMixFilled';

export default IconMaterialInstantMixFilled;
