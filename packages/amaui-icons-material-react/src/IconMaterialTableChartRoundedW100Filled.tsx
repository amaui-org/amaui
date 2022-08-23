import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableChartRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartRoundedW100Filled'
      short_name='TableChart'

      {...props}
    >
      <path d="M4.3 8.65V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H19.2Q19.85 4.3 20.275 4.725Q20.7 5.15 20.7 5.8V8.65ZM9.2 19.7V9.35H15.8V19.7ZM16.5 19.7V9.35H20.7V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7ZM5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V9.35H8.5V19.7Z"/>
    </Icon>
  );
});

IconMaterialTableChartRoundedW100Filled.displayName = 'AmauiIconMaterialTableChartRoundedW100Filled';

export default IconMaterialTableChartRoundedW100Filled;
