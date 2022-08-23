import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAutoReadPlayRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayRoundedW100'
      short_name='AutoReadPlay'

      {...props}
    >
      <path d="M11.175 12.025 13.275 10.625Q13.625 10.4 13.625 10Q13.625 9.6 13.275 9.375L11.175 7.975Q10.8 7.725 10.4 7.937Q10 8.15 10 8.6V11.4Q10 11.85 10.4 12.062Q10.8 12.275 11.175 12.025ZM4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H6.1ZM4 17.8 5.8 16H19.2Q19.55 16 19.775 15.775Q20 15.55 20 15.2V4.8Q20 4.45 19.775 4.225Q19.55 4 19.2 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8ZM4 4.8Q4 4.45 4 4.225Q4 4 4 4Q4 4 4 4.225Q4 4.45 4 4.8V15.2Q4 15.55 4 15.775Q4 16 4 16V17.8Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayRoundedW100.displayName = 'AmauiIconMaterialAutoReadPlayRoundedW100';

export default IconMaterialAutoReadPlayRoundedW100;
