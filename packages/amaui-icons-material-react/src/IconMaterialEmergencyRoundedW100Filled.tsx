import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRoundedW100Filled'
      short_name='Emergency'

      {...props}
    >
      <path d="M11.375 20.375Q11.05 20.375 10.838 20.163Q10.625 19.95 10.625 19.625V14.375L6.1 17Q5.825 17.15 5.525 17.075Q5.225 17 5.075 16.725L4.45 15.65Q4.3 15.375 4.375 15.075Q4.45 14.775 4.725 14.625L9.25 12L4.725 9.375Q4.45 9.225 4.375 8.925Q4.3 8.625 4.45 8.35L5.075 7.275Q5.225 7 5.525 6.925Q5.825 6.85 6.1 7L10.625 9.625V4.375Q10.625 4.05 10.838 3.837Q11.05 3.625 11.375 3.625H12.625Q12.95 3.625 13.163 3.837Q13.375 4.05 13.375 4.375V9.625L17.9 7Q18.175 6.85 18.475 6.925Q18.775 7 18.925 7.275L19.55 8.35Q19.7 8.625 19.625 8.925Q19.55 9.225 19.275 9.375L14.75 12L19.275 14.625Q19.55 14.775 19.625 15.075Q19.7 15.375 19.55 15.65L18.925 16.725Q18.775 17 18.475 17.075Q18.175 17.15 17.9 17L13.375 14.375V19.625Q13.375 19.95 13.163 20.163Q12.95 20.375 12.625 20.375Z"/>
    </Icon>
  );
});

IconMaterialEmergencyRoundedW100Filled.displayName = 'AmauiIconMaterialEmergencyRoundedW100Filled';

export default IconMaterialEmergencyRoundedW100Filled;
