import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInfoRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfoRoundedFilled'
      short_name='Info'

      {...props}
    >
      <path d="M12 17Q12.425 17 12.713 16.712Q13 16.425 13 16V11.975Q13 11.55 12.713 11.275Q12.425 11 12 11Q11.575 11 11.288 11.287Q11 11.575 11 12V16.025Q11 16.45 11.288 16.725Q11.575 17 12 17ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9ZM12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22Z"/>
    </Icon>
  );
});

IconMaterialInfoRoundedFilled.displayName = 'AmauiIconMaterialInfoRoundedFilled';

export default IconMaterialInfoRoundedFilled;
