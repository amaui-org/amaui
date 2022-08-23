import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoCallRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallRoundedW100Filled'
      short_name='VideoCall'

      {...props}
    >
      <path d="M10.625 15.35Q10.775 15.35 10.875 15.25Q10.975 15.15 10.975 15V12.35H13.625Q13.775 12.35 13.875 12.25Q13.975 12.15 13.975 12Q13.975 11.85 13.875 11.75Q13.775 11.65 13.625 11.65H10.975V9Q10.975 8.85 10.875 8.75Q10.775 8.65 10.625 8.65Q10.475 8.65 10.375 8.75Q10.275 8.85 10.275 9V11.65H7.625Q7.475 11.65 7.375 11.75Q7.275 11.85 7.275 12Q7.275 12.15 7.375 12.25Q7.475 12.35 7.625 12.35H10.275V15Q10.275 15.15 10.375 15.25Q10.475 15.35 10.625 15.35ZM5.425 18.7Q4.775 18.7 4.35 18.275Q3.925 17.85 3.925 17.2V6.8Q3.925 6.15 4.35 5.725Q4.775 5.3 5.425 5.3H15.825Q16.475 5.3 16.9 5.725Q17.325 6.15 17.325 6.8V11.5L19.4 9.425Q19.6 9.225 19.838 9.337Q20.075 9.45 20.075 9.725V14.275Q20.075 14.55 19.838 14.662Q19.6 14.775 19.4 14.575L17.325 12.5V17.2Q17.325 17.85 16.9 18.275Q16.475 18.7 15.825 18.7Z"/>
    </Icon>
  );
});

IconMaterialVideoCallRoundedW100Filled.displayName = 'AmauiIconMaterialVideoCallRoundedW100Filled';

export default IconMaterialVideoCallRoundedW100Filled;
