import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial30fpsSelectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsSelectW100Filled'

      short_name='30fpsSelect'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 12.7V12h4.3V9.35H5.5v-.7h4.3V6H5.5v-.7h5v7.4Zm8 0V5.3h5v7.4Zm.7-.7h3.6V6h-3.6ZM4.1 21.35v-3.7h.7v3.7Zm3.2 0v-3.7H8v3.7Zm3.2 0v-3.7h.7v3.7Zm3.2 0v-3.7h6.2v3.7Z"/>
    </Icon>
  );
});

IconMaterial30fpsSelectW100Filled.displayName = 'AmauiIconMaterial30fpsSelectW100Filled';

export default IconMaterial30fpsSelectW100Filled;
