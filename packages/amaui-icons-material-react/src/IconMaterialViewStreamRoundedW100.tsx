import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewStreamRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewStreamRoundedW100'
      short_name='ViewStream'

      {...props}
    >
      <path d="M19 16.2V12.35Q19 12.35 19 12.35Q19 12.35 19 12.35H5Q5 12.35 5 12.35Q5 12.35 5 12.35V16.2Q5 16.55 5.225 16.775Q5.45 17 5.8 17H18.2Q18.55 17 18.775 16.775Q19 16.55 19 16.2ZM19 11.65V7.8Q19 7.45 18.775 7.225Q18.55 7 18.2 7H5.8Q5.45 7 5.225 7.225Q5 7.45 5 7.8V11.65Q5 11.65 5 11.65Q5 11.65 5 11.65H19Q19 11.65 19 11.65Q19 11.65 19 11.65ZM5.8 17.7Q5.15 17.7 4.725 17.275Q4.3 16.85 4.3 16.2V7.8Q4.3 7.15 4.725 6.725Q5.15 6.3 5.8 6.3H18.2Q18.85 6.3 19.275 6.725Q19.7 7.15 19.7 7.8V16.2Q19.7 16.85 19.275 17.275Q18.85 17.7 18.2 17.7Z"/>
    </Icon>
  );
});

IconMaterialViewStreamRoundedW100.displayName = 'AmauiIconMaterialViewStreamRoundedW100';

export default IconMaterialViewStreamRoundedW100;
