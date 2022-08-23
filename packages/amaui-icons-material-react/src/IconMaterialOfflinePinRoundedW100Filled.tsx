import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOfflinePinRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OfflinePinRoundedW100Filled'
      short_name='OfflinePin'

      {...props}
    >
      <path d="M10.425 12.575Q10.65 12.8 10.95 12.8Q11.25 12.8 11.475 12.575L15.475 8.575Q15.575 8.475 15.562 8.337Q15.55 8.2 15.45 8.1Q15.325 7.975 15.2 7.975Q15.075 7.975 14.95 8.1L10.95 12.1L9.025 10.175Q8.925 10.075 8.788 10.087Q8.65 10.1 8.55 10.2Q8.425 10.325 8.425 10.45Q8.425 10.575 8.55 10.7ZM9 16.35H15.025Q15.15 16.35 15.25 16.25Q15.35 16.15 15.35 16Q15.35 15.85 15.25 15.75Q15.15 15.65 15 15.65H8.975Q8.85 15.65 8.75 15.75Q8.65 15.85 8.65 16Q8.65 16.15 8.75 16.25Q8.85 16.35 9 16.35ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialOfflinePinRoundedW100Filled.displayName = 'AmauiIconMaterialOfflinePinRoundedW100Filled';

export default IconMaterialOfflinePinRoundedW100Filled;
