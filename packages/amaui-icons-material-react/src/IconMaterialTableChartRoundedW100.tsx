import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTableChartRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartRoundedW100'
      short_name='TableChart'

      {...props}
    >
      <path d="M19.2 19.7H5.8Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H19.2Q19.85 4.3 20.275 4.725Q20.7 5.15 20.7 5.8V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7ZM5 8.65H20V5.8Q20 5.5 19.75 5.25Q19.5 5 19.2 5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8ZM8.5 9.35H5V18.2Q5 18.5 5.25 18.75Q5.5 19 5.8 19H8.5ZM16.5 9.35V19H19.2Q19.5 19 19.75 18.75Q20 18.5 20 18.2V9.35ZM15.8 9.35H9.2V19H15.8Z"/>
    </Icon>
  );
});

IconMaterialTableChartRoundedW100.displayName = 'AmauiIconMaterialTableChartRoundedW100';

export default IconMaterialTableChartRoundedW100;
