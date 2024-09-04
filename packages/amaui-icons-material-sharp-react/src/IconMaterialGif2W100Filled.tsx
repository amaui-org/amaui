import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGif2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gif2W100Filled'

      short_name='Gif2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-306v-348h256v28H160v292h207v-132h-90v-28h118v188H132Zm395 0v-348h28v348h-28Zm160 0v-348h228v28H715v132h160v28H715v160h-28Z"/>
    </Icon>
  );
});

IconMaterialGif2W100Filled.displayName = 'AmauiIconMaterialGif2W100Filled';

export default IconMaterialGif2W100Filled;
