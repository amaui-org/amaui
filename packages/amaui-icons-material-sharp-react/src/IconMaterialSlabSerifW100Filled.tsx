import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlabSerifW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlabSerifW100Filled'

      short_name='SlabSerif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240h176v-28H313l51-132h225l51 132H539v28h181v-28h-48L495-720h-35L283-268h-43v28Zm135-188 101-257h3l99 257H375ZM132-132v-696h696v696H132Z"/>
    </Icon>
  );
});

IconMaterialSlabSerifW100Filled.displayName = 'AmauiIconMaterialSlabSerifW100Filled';

export default IconMaterialSlabSerifW100Filled;
