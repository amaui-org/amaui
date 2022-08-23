import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPauseCircleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PauseCircleRoundedFilled'
      short_name='PauseCircle'

      {...props}
    >
      <path d="M10 16Q10.425 16 10.713 15.712Q11 15.425 11 15V8.975Q11 8.55 10.713 8.275Q10.425 8 10 8Q9.575 8 9.288 8.287Q9 8.575 9 9V15.025Q9 15.45 9.288 15.725Q9.575 16 10 16ZM14 16Q14.425 16 14.713 15.712Q15 15.425 15 15V8.975Q15 8.55 14.713 8.275Q14.425 8 14 8Q13.575 8 13.288 8.287Q13 8.575 13 9V15.025Q13 15.45 13.288 15.725Q13.575 16 14 16ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialPauseCircleRoundedFilled.displayName = 'AmauiIconMaterialPauseCircleRoundedFilled';

export default IconMaterialPauseCircleRoundedFilled;
