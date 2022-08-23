import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialOutboundRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboundRoundedW100Filled'
      short_name='Outbound'

      {...props}
    >
      <path d="M14.65 9.825V12.675Q14.65 12.8 14.75 12.9Q14.85 13 15 13Q15.15 13 15.25 12.9Q15.35 12.8 15.35 12.65V9.4Q15.35 9.075 15.138 8.862Q14.925 8.65 14.6 8.65H11.325Q11.2 8.65 11.1 8.75Q11 8.85 11 9Q11 9.15 11.1 9.25Q11.2 9.35 11.35 9.35H14.15L8.65 14.85Q8.525 14.975 8.538 15.1Q8.55 15.225 8.65 15.325Q8.775 15.45 8.9 15.45Q9.025 15.45 9.15 15.325ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialOutboundRoundedW100Filled.displayName = 'AmauiIconMaterialOutboundRoundedW100Filled';

export default IconMaterialOutboundRoundedW100Filled;
