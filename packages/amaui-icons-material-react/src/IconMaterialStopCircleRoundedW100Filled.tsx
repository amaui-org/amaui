import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStopCircleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopCircleRoundedW100Filled'
      short_name='StopCircle'

      {...props}
    >
      <path d="M12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7ZM9.4 15.35H14.6Q14.925 15.35 15.138 15.137Q15.35 14.925 15.35 14.6V9.4Q15.35 9.075 15.138 8.862Q14.925 8.65 14.6 8.65H9.4Q9.075 8.65 8.863 8.862Q8.65 9.075 8.65 9.4V14.6Q8.65 14.925 8.863 15.137Q9.075 15.35 9.4 15.35Z"/>
    </Icon>
  );
});

IconMaterialStopCircleRoundedW100Filled.displayName = 'AmauiIconMaterialStopCircleRoundedW100Filled';

export default IconMaterialStopCircleRoundedW100Filled;
