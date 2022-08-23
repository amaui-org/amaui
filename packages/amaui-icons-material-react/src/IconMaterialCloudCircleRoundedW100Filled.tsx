import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudCircleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudCircleRoundedW100Filled'
      short_name='CloudCircle'

      {...props}
    >
      <path d="M8.5 14.7H16Q16.725 14.7 17.212 14.212Q17.7 13.725 17.7 13Q17.7 12.325 17.225 11.812Q16.75 11.3 16 11.3H14.7V10.525Q14.7 9.375 13.913 8.588Q13.125 7.8 12.025 7.8Q10.925 7.8 10.15 8.512Q9.375 9.225 9.3 10.3H8.5Q7.6 10.3 6.95 10.962Q6.3 11.625 6.3 12.475Q6.3 13.4 6.938 14.05Q7.575 14.7 8.5 14.7ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialCloudCircleRoundedW100Filled.displayName = 'AmauiIconMaterialCloudCircleRoundedW100Filled';

export default IconMaterialCloudCircleRoundedW100Filled;
