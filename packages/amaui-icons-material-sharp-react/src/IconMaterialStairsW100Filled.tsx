import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStairsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StairsW100Filled'

      short_name='Stairs'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 17.35h3.125v-3.325h2.575V10.7h2.575V7.35h2.425v-.7h-3.125v3.325H11.65V13.3H9.075v3.35H6.65ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialStairsW100Filled.displayName = 'AmauiIconMaterialStairsW100Filled';

export default IconMaterialStairsW100Filled;
