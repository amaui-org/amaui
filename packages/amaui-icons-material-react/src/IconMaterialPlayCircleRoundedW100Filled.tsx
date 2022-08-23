import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPlayCircleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayCircleRoundedW100Filled'
      short_name='PlayCircle'

      {...props}
    >
      <path d="M10.15 10.075V13.925Q10.15 14.375 10.538 14.587Q10.925 14.8 11.3 14.55L14.325 12.625Q14.675 12.4 14.675 12Q14.675 11.6 14.325 11.375L11.3 9.45Q10.925 9.2 10.538 9.412Q10.15 9.625 10.15 10.075ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.8 3.3 15.388 3.987Q16.975 4.675 18.15 5.85Q19.325 7.025 20.013 8.612Q20.7 10.2 20.7 12Q20.7 13.8 20.013 15.387Q19.325 16.975 18.15 18.15Q16.975 19.325 15.388 20.012Q13.8 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialPlayCircleRoundedW100Filled.displayName = 'AmauiIconMaterialPlayCircleRoundedW100Filled';

export default IconMaterialPlayCircleRoundedW100Filled;
