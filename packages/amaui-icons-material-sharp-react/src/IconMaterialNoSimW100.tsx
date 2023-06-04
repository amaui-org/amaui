import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSimW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimW100'

      short_name='NoSim'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m18.7 16.2-.7-.7V4h-7.15l-2.2 2.2-.5-.5 2.4-2.4h8.15Zm-5.275-5.25Zm-.95 2.825ZM20.4 21.75 6.75 8.1 6 8.85V20h12v-1.65l.7.7v1.65H5.3V8.55l.95-.95-3.8-3.8.5-.5L20.9 21.25Z"/>
    </Icon>
  );
});

IconMaterialNoSimW100.displayName = 'AmauiIconMaterialNoSimW100';

export default IconMaterialNoSimW100;
