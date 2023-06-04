import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid3x3Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3Filled'

      short_name='Grid3x3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 20v-4H4v-2h4v-4H4V8h4V4h2v4h4V4h2v4h4v2h-4v4h4v2h-4v4h-2v-4h-4v4Zm2-6h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3Filled.displayName = 'AmauiIconMaterialGrid3x3Filled';

export default IconMaterialGrid3x3Filled;
