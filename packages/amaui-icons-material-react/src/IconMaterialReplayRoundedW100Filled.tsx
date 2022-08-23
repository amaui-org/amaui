import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplayRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayRoundedW100Filled'
      short_name='Replay'

      {...props}
    >
      <path d="M12 20.7Q8.875 20.7 6.65 18.575Q4.425 16.45 4.3 13.35Q4.3 13.2 4.4 13.1Q4.5 13 4.65 13Q4.8 13 4.9 13.1Q5 13.2 5 13.35Q5.125 16.15 7.15 18.075Q9.175 20 12 20Q14.925 20 16.962 17.962Q19 15.925 19 13Q19 10.075 16.962 8.037Q14.925 6 12 6H11.55L12.95 7.4Q13.075 7.525 13.075 7.65Q13.075 7.775 12.95 7.9Q12.85 8 12.7 8Q12.55 8 12.45 7.9L10.725 6.15Q10.6 6.025 10.55 5.887Q10.5 5.75 10.5 5.625Q10.5 5.475 10.55 5.337Q10.6 5.2 10.725 5.1L12.5 3.35Q12.625 3.225 12.75 3.225Q12.875 3.225 13 3.35Q13.125 3.475 13.125 3.6Q13.125 3.725 13 3.85L11.55 5.3H12Q13.6 5.3 15 5.9Q16.4 6.5 17.45 7.55Q18.5 8.6 19.1 10Q19.7 11.4 19.7 13Q19.7 14.6 19.1 16Q18.5 17.4 17.45 18.45Q16.4 19.5 15 20.1Q13.6 20.7 12 20.7Z"/>
    </Icon>
  );
});

IconMaterialReplayRoundedW100Filled.displayName = 'AmauiIconMaterialReplayRoundedW100Filled';

export default IconMaterialReplayRoundedW100Filled;
