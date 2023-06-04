import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignSelfStretchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignSelfStretchW100Filled'

      short_name='AlignSelfStretch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M132 256v-28h696v28H132Zm0 668v-28h696v28H132Zm314-180V388h68v356h-68Z"/>
    </Icon>
  );
});

IconMaterialAlignSelfStretchW100Filled.displayName = 'AmauiIconMaterialAlignSelfStretchW100Filled';

export default IconMaterialAlignSelfStretchW100Filled;
