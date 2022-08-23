import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamRoundedW100'
      short_name='Videocam'

      {...props}
    >
      <path d="M5.425 18.7Q4.775 18.7 4.35 18.275Q3.925 17.85 3.925 17.2V6.8Q3.925 6.15 4.35 5.725Q4.775 5.3 5.425 5.3H15.825Q16.475 5.3 16.9 5.725Q17.325 6.15 17.325 6.8V11.5L19.4 9.425Q19.6 9.225 19.838 9.337Q20.075 9.45 20.075 9.725V14.275Q20.075 14.55 19.838 14.662Q19.6 14.775 19.4 14.575L17.325 12.5V17.2Q17.325 17.85 16.9 18.275Q16.475 18.7 15.825 18.7ZM5.425 18H15.825Q16.175 18 16.4 17.775Q16.625 17.55 16.625 17.2V6.8Q16.625 6.45 16.4 6.225Q16.175 6 15.825 6H5.425Q5.075 6 4.85 6.225Q4.625 6.45 4.625 6.8V17.2Q4.625 17.55 4.85 17.775Q5.075 18 5.425 18ZM4.625 18Q4.625 18 4.625 17.775Q4.625 17.55 4.625 17.2V6.8Q4.625 6.45 4.625 6.225Q4.625 6 4.625 6Q4.625 6 4.625 6.225Q4.625 6.45 4.625 6.8V17.2Q4.625 17.55 4.625 17.775Q4.625 18 4.625 18Z"/>
    </Icon>
  );
});

IconMaterialVideocamRoundedW100.displayName = 'AmauiIconMaterialVideocamRoundedW100';

export default IconMaterialVideocamRoundedW100;
