import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDataUsageRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataUsageRoundedW100'
      short_name='DataUsage'

      {...props}
    >
      <path d="M20 15.4 19.4 15.05Q19.75 14.325 19.875 13.562Q20 12.8 20 12Q20 8.975 18.013 6.7Q16.025 4.425 13 4.05V3.35Q16.325 3.65 18.513 6.15Q20.7 8.65 20.7 12Q20.7 12.875 20.538 13.738Q20.375 14.6 20 15.4ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 8.65 5.5 6.2Q7.7 3.75 11 3.35V4.05Q7.975 4.45 5.988 6.712Q4 8.975 4 12Q4 15.35 6.325 17.675Q8.65 20 12 20Q13.9 20 15.588 19.188Q17.275 18.375 18.4 16.85L19 17.25Q17.725 18.9 15.9 19.8Q14.075 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialDataUsageRoundedW100.displayName = 'AmauiIconMaterialDataUsageRoundedW100';

export default IconMaterialDataUsageRoundedW100;
