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
      <path d="M5.775 8.65 3.25 4.3h17.5l-2.525 4.35Zm2.9 5-2.5-4.3h11.65l-2.5 4.3ZM12 19.4l-2.925-5.05h5.85Z"/>
    </Icon>
  );
});

IconMaterialTornadoW100Filled.displayName = 'AmauiIconMaterialTornadoW100Filled';

export default IconMaterialTornadoW100Filled;
