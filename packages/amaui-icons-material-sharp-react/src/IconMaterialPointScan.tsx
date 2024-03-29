import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPointScan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointScan'

      short_name='PointScan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 656q-33 0-56.5-23.5T400 576q0-33 23.5-56.5T480 496q33 0 56.5 23.5T560 576q0 33-23.5 56.5T480 656Zm-40-240V216h80v200h-80Zm0 520V736h80v200h-80Zm200-320v-80h200v80H640Zm-520 0v-80h200v80H120Z"/>
    </Icon>
  );
});

IconMaterialPointScan.displayName = 'AmauiIconMaterialPointScan';

export default IconMaterialPointScan;
