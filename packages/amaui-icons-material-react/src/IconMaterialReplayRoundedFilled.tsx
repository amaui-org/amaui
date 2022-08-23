import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplayRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayRoundedFilled'
      short_name='Replay'

      {...props}
    >
      <path d="M12 22Q8.5 22 5.963 19.7Q3.425 17.4 3.05 14Q3 13.6 3.288 13.3Q3.575 13 4 13Q4.4 13 4.713 13.287Q5.025 13.575 5.075 14Q5.425 16.575 7.375 18.288Q9.325 20 12 20Q14.925 20 16.962 17.962Q19 15.925 19 13Q19 10.075 16.962 8.037Q14.925 6 12 6H11.85L12.725 6.875Q13 7.15 13 7.575Q13 8 12.725 8.275Q12.425 8.575 12 8.575Q11.575 8.575 11.3 8.275L8.7 5.7Q8.55 5.55 8.488 5.375Q8.425 5.2 8.425 5Q8.425 4.8 8.488 4.625Q8.55 4.45 8.7 4.3L11.3 1.7Q11.575 1.425 12 1.425Q12.425 1.425 12.725 1.7Q13 2 13 2.425Q13 2.85 12.725 3.125L11.85 4H12Q13.875 4 15.513 4.713Q17.15 5.425 18.363 6.637Q19.575 7.85 20.288 9.487Q21 11.125 21 13Q21 14.875 20.288 16.512Q19.575 18.15 18.363 19.362Q17.15 20.575 15.513 21.288Q13.875 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialReplayRoundedFilled.displayName = 'AmauiIconMaterialReplayRoundedFilled';

export default IconMaterialReplayRoundedFilled;
