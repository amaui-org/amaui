import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlabSerifW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlabSerifW100'

      short_name='SlabSerif'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-240h176v-28H313l51-132h225l51 132H539v28h181v-28h-48L495-720h-35L283-268h-43v28Zm135-188 101-257h3l99 257H375ZM132-132v-696h696v696H132Zm28-28h640v-640H160v640Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialSlabSerifW100.displayName = 'AmauiIconMaterialSlabSerifW100';

export default IconMaterialSlabSerifW100;
