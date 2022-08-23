import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplayCircleFilledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplayCircleFilledSharp'
      short_name='ReplayCircleFilled'

      {...props}
    >
      <path d="M12 18.5Q14.5 18.5 16.25 16.75Q18 15 18 12.5Q18 9.975 16.188 8.238Q14.375 6.5 11.8 6.5L13.4 4.9L12 3.5L8 7.5L12 11.5L13.4 10.1L11.85 8.5Q13.575 8.5 14.788 9.662Q16 10.825 16 12.5Q16 14.15 14.825 15.325Q13.65 16.5 12 16.5Q10.35 16.5 9.175 15.325Q8 14.15 8 12.5H6Q6 15 7.75 16.75Q9.5 18.5 12 18.5ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialReplayCircleFilledSharp.displayName = 'AmauiIconMaterialReplayCircleFilledSharp';

export default IconMaterialReplayCircleFilledSharp;
