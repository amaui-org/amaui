import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedRoundedW100'
      short_name='CallMissed'

      {...props}
    >
      <path d="M12.125 16.2Q11.975 16.2 11.85 16.15Q11.725 16.1 11.6 15.975L4.475 8.85V14Q4.475 14.15 4.375 14.25Q4.275 14.35 4.125 14.35Q3.975 14.35 3.875 14.25Q3.775 14.15 3.775 14V8.4Q3.775 8.075 3.988 7.862Q4.2 7.65 4.525 7.65H10.125Q10.275 7.65 10.375 7.75Q10.475 7.85 10.475 8Q10.475 8.15 10.375 8.25Q10.275 8.35 10.125 8.35H4.975L12.125 15.5L19.5 8.125Q19.6 8.025 19.725 8.025Q19.85 8.025 19.975 8.15Q20.1 8.275 20.1 8.4Q20.1 8.525 19.975 8.65L12.65 15.975Q12.525 16.1 12.4 16.15Q12.275 16.2 12.125 16.2Z"/>
    </Icon>
  );
});

IconMaterialCallMissedRoundedW100.displayName = 'AmauiIconMaterialCallMissedRoundedW100';

export default IconMaterialCallMissedRoundedW100;
