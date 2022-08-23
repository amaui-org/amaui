import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddCircleRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddCircleRoundedFilled'
      short_name='AddCircle'

      {...props}
    >
      <path d="M12 17Q12.425 17 12.713 16.712Q13 16.425 13 16V13H16.025Q16.45 13 16.725 12.712Q17 12.425 17 12Q17 11.575 16.712 11.287Q16.425 11 16 11H13V7.975Q13 7.55 12.713 7.275Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8V11H7.975Q7.55 11 7.275 11.287Q7 11.575 7 12Q7 12.425 7.287 12.712Q7.575 13 8 13H11V16.025Q11 16.45 11.288 16.725Q11.575 17 12 17ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialAddCircleRoundedFilled.displayName = 'AmauiIconMaterialAddCircleRoundedFilled';

export default IconMaterialAddCircleRoundedFilled;
