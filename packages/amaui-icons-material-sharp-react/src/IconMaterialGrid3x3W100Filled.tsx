import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid3x3W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3W100Filled'

      short_name='Grid3x3'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 18.7v-4h-4V14h4v-4h-4v-.7h4v-4h.7v4h4v-4h.7v4h4v.7h-4v4h4v.7h-4v4H14v-4h-4v4ZM10 14h4v-4h-4Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3W100Filled.displayName = 'AmauiIconMaterialGrid3x3W100Filled';

export default IconMaterialGrid3x3W100Filled;
