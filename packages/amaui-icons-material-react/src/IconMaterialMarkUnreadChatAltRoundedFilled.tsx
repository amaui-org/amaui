import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMarkUnreadChatAltRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkUnreadChatAltRoundedFilled'
      short_name='MarkUnreadChatAlt'

      {...props}
    >
      <path d="M13 14Q13.425 14 13.713 13.712Q14 13.425 14 13Q14 12.575 13.713 12.287Q13.425 12 13 12H7Q6.575 12 6.287 12.287Q6 12.575 6 13Q6 13.425 6.287 13.712Q6.575 14 7 14ZM17 11Q17.425 11 17.712 10.712Q18 10.425 18 10Q18 9.575 17.712 9.287Q17.425 9 17 9H7Q6.575 9 6.287 9.287Q6 9.575 6 10Q6 10.425 6.287 10.712Q6.575 11 7 11ZM19 6Q17.75 6 16.875 5.125Q16 4.25 16 3Q16 1.75 16.875 0.875Q17.75 0 19 0Q20.25 0 21.125 0.875Q22 1.75 22 3Q22 4.25 21.125 5.125Q20.25 6 19 6ZM6 18 3.7 20.3Q3.225 20.775 2.612 20.512Q2 20.25 2 19.575V4Q2 3.175 2.588 2.587Q3.175 2 4 2H14.1Q14 2.5 14 3Q14 3.5 14.1 4Q14.225 4.575 14.45 5.075Q14.675 5.575 15 6H7Q6.575 6 6.287 6.287Q6 6.575 6 7Q6 7.425 6.287 7.713Q6.575 8 7 8H18Q18.225 8 18.488 8Q18.75 8 19 8Q19.8 8 20.575 7.75Q21.35 7.5 22 7V16Q22 16.825 21.413 17.413Q20.825 18 20 18Z"/>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAltRoundedFilled.displayName = 'AmauiIconMaterialMarkUnreadChatAltRoundedFilled';

export default IconMaterialMarkUnreadChatAltRoundedFilled;
