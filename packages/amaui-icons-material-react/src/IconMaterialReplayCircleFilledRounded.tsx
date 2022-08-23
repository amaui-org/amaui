import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplayCircleFilledRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayCircleFilledRounded'
      short_name='ReplayCircleFilled'

      {...props}
    >
      <path d="M12 18.5Q14.5 18.5 16.25 16.75Q18 15 18 12.5Q18 9.975 16.188 8.238Q14.375 6.5 11.8 6.5L12.7 5.6Q12.975 5.325 12.975 4.9Q12.975 4.475 12.7 4.2Q12.425 3.925 12 3.925Q11.575 3.925 11.3 4.2L8.7 6.8Q8.55 6.95 8.488 7.125Q8.425 7.3 8.425 7.5Q8.425 7.7 8.488 7.875Q8.55 8.05 8.7 8.2L11.3 10.8Q11.575 11.075 11.988 11.087Q12.4 11.1 12.7 10.8Q12.975 10.525 12.988 10.112Q13 9.7 12.725 9.4L11.85 8.5Q13.575 8.5 14.788 9.662Q16 10.825 16 12.5Q16 14.15 14.825 15.325Q13.65 16.5 12 16.5Q10.575 16.5 9.488 15.613Q8.4 14.725 8.1 13.375Q8 13 7.725 12.75Q7.45 12.5 7.1 12.5Q6.625 12.5 6.325 12.837Q6.025 13.175 6.1 13.6Q6.475 15.725 8.125 17.113Q9.775 18.5 12 18.5ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialReplayCircleFilledRounded.displayName = 'AmauiIconMaterialReplayCircleFilledRounded';

export default IconMaterialReplayCircleFilledRounded;
