import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencySharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencySharpW100Filled'
      short_name='Emergency'

      {...props}
    >
      <path d="M11 20.7Q10.725 20.7 10.513 20.487Q10.3 20.275 10.3 20V14.95L5.925 17.475Q5.675 17.6 5.4 17.538Q5.125 17.475 4.975 17.2L3.975 15.475Q3.825 15.2 3.888 14.925Q3.95 14.65 4.225 14.525L8.6 12L4.225 9.475Q3.975 9.325 3.9 9.05Q3.825 8.775 3.975 8.525L4.975 6.8Q5.125 6.525 5.412 6.45Q5.7 6.375 5.95 6.525L10.3 9.05V4Q10.3 3.725 10.513 3.512Q10.725 3.3 11 3.3H13Q13.275 3.3 13.488 3.512Q13.7 3.725 13.7 4V9.05L18.075 6.525Q18.325 6.4 18.6 6.462Q18.875 6.525 19.025 6.8L20.025 8.525Q20.175 8.8 20.113 9.075Q20.05 9.35 19.775 9.475L15.4 12L19.775 14.525Q20.05 14.65 20.113 14.925Q20.175 15.2 20.025 15.475L19.025 17.2Q18.875 17.475 18.6 17.538Q18.325 17.6 18.075 17.475L13.7 14.95V20Q13.7 20.275 13.488 20.487Q13.275 20.7 13 20.7Z"/>
    </Icon>
  );
});

IconMaterialEmergencySharpW100Filled.displayName = 'AmauiIconMaterialEmergencySharpW100Filled';

export default IconMaterialEmergencySharpW100Filled;
