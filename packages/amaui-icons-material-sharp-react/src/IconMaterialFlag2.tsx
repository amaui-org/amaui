import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlag2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flag2'

      short_name='Flag2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-80v-760h640l-80 200 80 200H280v360h-80Zm80-440h442l-48-120 48-120H280v240Zm0 0v-240 240Z"/>
    </Icon>
  );
});

IconMaterialFlag2.displayName = 'AmauiIconMaterialFlag2';

export default IconMaterialFlag2;
