import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGrid3x3OffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Grid3x3OffW100Filled'

      short_name='Grid3x3Off'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m702-372-28-28h74v28h-46ZM588-486 486-588h74v-160h28v160h160v28H588v74ZM400-674l-28-28v-46h28v74Zm408 562L588-332v120h-28v-148l-12-12H400v160h-28v-160H212v-28h160v-148l-12-12H212v-28h120L130-790l20-20 678 678-20 20Z"/>
    </Icon>
  );
});

IconMaterialGrid3x3OffW100Filled.displayName = 'AmauiIconMaterialGrid3x3OffW100Filled';

export default IconMaterialGrid3x3OffW100Filled;
