import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialErrorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ErrorSharpFilled'
      short_name='Error'

      {...props}
    >
      <path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM11 13H13V7H11ZM12 17Q12.425 17 12.713 16.712Q13 16.425 13 16Q13 15.575 12.713 15.287Q12.425 15 12 15Q11.575 15 11.288 15.287Q11 15.575 11 16Q11 16.425 11.288 16.712Q11.575 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialErrorSharpFilled.displayName = 'AmauiIconMaterialErrorSharpFilled';

export default IconMaterialErrorSharpFilled;
