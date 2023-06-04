import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTornadoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TornadoW100Filled'

      short_name='Tornado'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.775 8.65 4.55 6.55q-.425-.75 0-1.5t1.3-.75h12.3q.875 0 1.3.75.425.75 0 1.5l-1.225 2.1Zm2.9 5-2.5-4.3h11.65l-2.5 4.3Zm2.025 3.525L9.075 14.35h5.85L13.3 17.175q-.425.75-1.3.75t-1.3-.75Z"/>
    </Icon>
  );
});

IconMaterialTornadoW100Filled.displayName = 'AmauiIconMaterialTornadoW100Filled';

export default IconMaterialTornadoW100Filled;
