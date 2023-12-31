import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextAdW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextAdW100Filled'

      short_name='TextAd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm106-126h484v-28H238v28Zm0-128h484v-28H238v28Zm0-128h336v-28H238v28Z"/>
    </Icon>
  );
});

IconMaterialTextAdW100Filled.displayName = 'AmauiIconMaterialTextAdW100Filled';

export default IconMaterialTextAdW100Filled;
