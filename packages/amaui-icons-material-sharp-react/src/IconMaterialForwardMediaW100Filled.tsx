import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardMediaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardMediaW100Filled'

      short_name='ForwardMedia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 924q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-64 24-120t66-98q42-42 98-66t120-24h18l-68-68 20-20 102 101-100 101-20-20 66-66h-18q-117 0-198.5 81.5T200 616q0 117 81.5 198.5T480 896q117 0 198.5-81.5T760 616h28q0 64-24 120t-66 98q-42 42-98 66t-120 24Z"/>
    </Icon>
  );
});

IconMaterialForwardMediaW100Filled.displayName = 'AmauiIconMaterialForwardMediaW100Filled';

export default IconMaterialForwardMediaW100Filled;
