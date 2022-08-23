import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCommentsDisabledRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabledRoundedFilled'
      short_name='CommentsDisabled'

      {...props}
    >
      <path d="M4 18Q3.175 18 2.588 17.413Q2 16.825 2 16V4.825Q2 4.825 2 4.825Q2 4.825 2 4.825L1.375 4.2Q1.075 3.9 1.075 3.487Q1.075 3.075 1.375 2.775Q1.675 2.475 2.087 2.475Q2.5 2.475 2.8 2.775L21.2 21.175Q21.5 21.475 21.5 21.875Q21.5 22.275 21.2 22.575Q20.9 22.875 20.488 22.875Q20.075 22.875 19.775 22.575L15.175 18ZM22 19.125 16.875 14H17Q17.425 14 17.712 13.712Q18 13.425 18 13Q18 12.575 17.712 12.287Q17.425 12 17 12H14.875L13.875 11H17Q17.425 11 17.712 10.712Q18 10.425 18 10Q18 9.575 17.712 9.287Q17.425 9 17 9H11.875L10.875 8H17Q17.425 8 17.712 7.713Q18 7.425 18 7Q18 6.575 17.712 6.287Q17.425 6 17 6H8.875L4.875 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4ZM11.175 14 9.175 12H7Q6.575 12 6.287 12.287Q6 12.575 6 13Q6 13.425 6.287 13.712Q6.575 14 7 14ZM7 11H8.175L6.4 9.2Q6.225 9.35 6.113 9.562Q6 9.775 6 10Q6 10.425 6.287 10.712Q6.575 11 7 11Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabledRoundedFilled.displayName = 'AmauiIconMaterialCommentsDisabledRoundedFilled';

export default IconMaterialCommentsDisabledRoundedFilled;
