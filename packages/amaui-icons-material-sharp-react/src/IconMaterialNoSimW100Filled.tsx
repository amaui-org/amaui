import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoSimW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoSimW100Filled'

      short_name='NoSim'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.7 16.2 8.15 5.7l2.4-2.4h8.15Zm1.7 5.55-3.4-3.4.5-.5 1.2 1.2v1.65H5.3V8.55l.95-.95-3.8-3.8.5-.5L20.9 21.25Z"/>
    </Icon>
  );
});

IconMaterialNoSimW100Filled.displayName = 'AmauiIconMaterialNoSimW100Filled';

export default IconMaterialNoSimW100Filled;
