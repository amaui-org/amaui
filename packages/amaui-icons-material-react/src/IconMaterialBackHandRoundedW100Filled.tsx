import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackHandRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackHandRoundedW100Filled'
      short_name='BackHand'

      {...props}
    >
      <path d="M13 22.1Q10.525 22.1 8.788 20.75Q7.05 19.4 6.225 16.9L4.725 12.375Q4.55 11.85 4.713 11.5Q4.875 11.15 5.3 11.15Q5.975 11.15 6.45 11.812Q6.925 12.475 7.2 13.2L7.925 15.05Q7.95 15.1 8.2 15.25H8.7V5.125Q8.7 4.675 8.988 4.387Q9.275 4.1 9.725 4.1Q10.175 4.1 10.463 4.387Q10.75 4.675 10.75 5.125V11.65Q10.75 11.8 10.85 11.9Q10.95 12 11.1 12Q11.25 12 11.35 11.9Q11.45 11.8 11.45 11.65V2.825Q11.45 2.375 11.738 2.087Q12.025 1.8 12.475 1.8Q12.925 1.8 13.213 2.087Q13.5 2.375 13.5 2.825V11.65Q13.5 11.8 13.6 11.9Q13.7 12 13.85 12Q14 12 14.1 11.9Q14.2 11.8 14.2 11.65V3.75Q14.2 3.3 14.5 3Q14.8 2.7 15.25 2.7Q15.7 2.7 16 3Q16.3 3.3 16.3 3.75V11.65Q16.3 11.8 16.4 11.9Q16.5 12 16.65 12Q16.8 12 16.9 11.9Q17 11.8 17 11.65V6.5Q17 6.05 17.3 5.75Q17.6 5.45 18.05 5.45Q18.5 5.45 18.8 5.75Q19.1 6.05 19.1 6.5V16Q19.1 19.075 17.587 20.587Q16.075 22.1 13 22.1Z"/>
    </Icon>
  );
});

IconMaterialBackHandRoundedW100Filled.displayName = 'AmauiIconMaterialBackHandRoundedW100Filled';

export default IconMaterialBackHandRoundedW100Filled;
