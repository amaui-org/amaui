import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowRoundedW100Filled'
      short_name='Window'

      {...props}
    >
      <path d="M12.35 11.65V3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V11.65ZM12.35 20.7V12.35H20.7V19.2Q20.7 19.85 20.275 20.275Q19.85 20.7 19.2 20.7ZM3.3 11.65V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H11.65V11.65ZM4.8 20.7Q4.15 20.7 3.725 20.275Q3.3 19.85 3.3 19.2V12.35H11.65V20.7Z"/>
    </Icon>
  );
});

IconMaterialWindowRoundedW100Filled.displayName = 'AmauiIconMaterialWindowRoundedW100Filled';

export default IconMaterialWindowRoundedW100Filled;
