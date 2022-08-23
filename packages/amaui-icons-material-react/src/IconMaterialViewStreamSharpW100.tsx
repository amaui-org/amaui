import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewStreamSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamSharpW100'
      short_name='ViewStream'

      {...props}
    >
      <path d="M19 16.2V12.35H5V16.2Q5 16.5 5.25 16.75Q5.5 17 5.8 17H18.2Q18.5 17 18.75 16.75Q19 16.5 19 16.2ZM19 11.65V7.8Q19 7.5 18.75 7.25Q18.5 7 18.2 7H5.8Q5.5 7 5.25 7.25Q5 7.5 5 7.8V11.65H19ZM5.8 17.7Q5.15 17.7 4.725 17.275Q4.3 16.85 4.3 16.2V7.8Q4.3 7.15 4.725 6.725Q5.15 6.3 5.8 6.3H18.2Q18.85 6.3 19.275 6.725Q19.7 7.15 19.7 7.8V16.2Q19.7 16.85 19.275 17.275Q18.85 17.7 18.2 17.7Z"/>
    </Icon>
  );
});

IconMaterialViewStreamSharpW100.displayName = 'AmauiIconMaterialViewStreamSharpW100';

export default IconMaterialViewStreamSharpW100;
