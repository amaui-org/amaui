import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraW100Filled'

      short_name='Camera'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.175 9.1 3.15-5.475q1.95.5 3.55 2 1.6 1.5 2.325 3.475Zm-2.15 2.275-3.15-5.55Q7.125 4.6 8.7 3.95q1.575-.65 3.3-.65.4 0 .913.05.512.05.737.1Zm-5.45 2.775q-.15-.65-.212-1.162Q3.3 12.475 3.3 12q0-1.525.525-2.95.525-1.425 1.55-2.7l4.45 7.8ZM9.8 20.425q-2.1-.55-3.75-2.075-1.65-1.525-2.275-3.525h9.2Zm2.2.275q-.375 0-.825-.05-.45-.05-.7-.1l4.6-7.775 3.075 5.375q-1.225 1.225-2.825 1.888-1.6.662-3.325.662Zm6.625-3.05-4.45-7.85h6.25q.125.575.2 1.138.075.562.075 1.062 0 1.575-.512 2.975-.513 1.4-1.563 2.675Z"/>
    </Icon>
  );
});

IconMaterialCameraW100Filled.displayName = 'AmauiIconMaterialCameraW100Filled';

export default IconMaterialCameraW100Filled;
