import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBusinessCenterRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterRoundedW100Filled'
      short_name='BusinessCenter'

      {...props}
    >
      <path d="M3.3 13.65V8.8Q3.3 8.15 3.725 7.725Q4.15 7.3 4.8 7.3H9.3V6.1Q9.3 5.45 9.725 5.025Q10.15 4.6 10.8 4.6H13.2Q13.85 4.6 14.275 5.025Q14.7 5.45 14.7 6.1V7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V13.65H13.7V13.05Q13.7 12.725 13.488 12.512Q13.275 12.3 12.95 12.3H11.05Q10.725 12.3 10.513 12.512Q10.3 12.725 10.3 13.05V13.65ZM10 7.3H14V6.1Q14 5.8 13.75 5.55Q13.5 5.3 13.2 5.3H10.8Q10.5 5.3 10.25 5.55Q10 5.8 10 6.1ZM11 15V13H13V15ZM4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V14.35H10.3V14.95Q10.3 15.275 10.513 15.488Q10.725 15.7 11.05 15.7H12.95Q13.275 15.7 13.488 15.488Q13.7 15.275 13.7 14.95V14.35H20.7V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterRoundedW100Filled.displayName = 'AmauiIconMaterialBusinessCenterRoundedW100Filled';

export default IconMaterialBusinessCenterRoundedW100Filled;
