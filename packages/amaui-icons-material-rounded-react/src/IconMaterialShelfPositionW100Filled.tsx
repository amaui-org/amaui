import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShelfPositionW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShelfPositionW100Filled'

      short_name='ShelfPosition'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M172 710v114q0 24.75 17.625 42.375T232 884h536q24.75 0 42.375-17.625T828 824V710H172Zm488-28h168V328q0-24.75-17.625-42.375T768 268H660v414Zm-488 0h168V268H232q-24.75 0-42.375 17.625T172 328v354Zm196 0h264V268H368v414Z"/>
    </Icon>
  );
});

IconMaterialShelfPositionW100Filled.displayName = 'AmauiIconMaterialShelfPositionW100Filled';

export default IconMaterialShelfPositionW100Filled;
