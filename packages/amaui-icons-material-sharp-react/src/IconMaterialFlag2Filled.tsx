import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlag2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flag2Filled'

      short_name='Flag2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80v-760h640l-80 200 80 200H280v360h-80Z"/>
    </Icon>
  );
});

IconMaterialFlag2Filled.displayName = 'AmauiIconMaterialFlag2Filled';

export default IconMaterialFlag2Filled;
