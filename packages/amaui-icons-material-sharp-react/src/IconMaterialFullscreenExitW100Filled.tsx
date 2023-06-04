import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFullscreenExitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExitW100Filled'

      short_name='FullscreenExit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 19v-4.3H5V14h5v5ZM5 10v-.7h4.3V5h.7v5Zm9 9v-5h5v.7h-4.3V19Zm0-9V5h.7v4.3H19v.7Z"/>
    </Icon>
  );
});

IconMaterialFullscreenExitW100Filled.displayName = 'AmauiIconMaterialFullscreenExitW100Filled';

export default IconMaterialFullscreenExitW100Filled;
