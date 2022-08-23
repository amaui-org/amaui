import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowRoundedW100'
      short_name='Window'

      {...props}
    >
      <path d="M19.2 20.7H4.8Q4.15 20.7 3.725 20.275Q3.3 19.85 3.3 19.2V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V19.2Q20.7 19.85 20.275 20.275Q19.85 20.7 19.2 20.7ZM11.65 11.65V4H4.8Q4.5 4 4.25 4.25Q4 4.5 4 4.8V11.65ZM11.65 12.35H4V19.2Q4 19.5 4.25 19.75Q4.5 20 4.8 20H11.65ZM12.35 12.35V20H19.2Q19.5 20 19.75 19.75Q20 19.5 20 19.2V12.35ZM12.35 11.65H20V4.8Q20 4.5 19.75 4.25Q19.5 4 19.2 4H12.35Z"/>
    </Icon>
  );
});

IconMaterialWindowRoundedW100.displayName = 'AmauiIconMaterialWindowRoundedW100';

export default IconMaterialWindowRoundedW100;
