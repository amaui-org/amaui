import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlag2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flag2W100Filled'

      short_name='Flag2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-132v-656h536l-85 162 85 162H280v332h-28Z"/>
    </Icon>
  );
});

IconMaterialFlag2W100Filled.displayName = 'AmauiIconMaterialFlag2W100Filled';

export default IconMaterialFlag2W100Filled;
