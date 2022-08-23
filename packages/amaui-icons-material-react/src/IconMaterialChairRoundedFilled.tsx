import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialChairRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairRoundedFilled'
      short_name='Chair'

      {...props}
    >
      <path d="M7 13V11Q7 9.725 6.25 8.662Q5.5 7.6 4 7.375V6Q4 4.75 4.875 3.875Q5.75 3 7 3H17Q18.25 3 19.125 3.875Q20 4.75 20 6V7.375Q18.5 7.75 17.75 8.738Q17 9.725 17 11V13ZM5 21Q4.575 21 4.287 20.712Q4 20.425 4 20V19Q2.75 19 1.875 18.125Q1 17.25 1 16V11Q1 10.125 1.562 9.562Q2.125 9 3 9Q3.875 9 4.438 9.562Q5 10.125 5 11V15H19V11Q19 10.125 19.562 9.562Q20.125 9 21 9Q21.875 9 22.438 9.562Q23 10.125 23 11V16Q23 17.25 22.125 18.125Q21.25 19 20 19V20Q20 20.425 19.712 20.712Q19.425 21 19 21Q18.575 21 18.288 20.712Q18 20.425 18 20V19H6V20Q6 20.425 5.713 20.712Q5.425 21 5 21Z"/>
    </Icon>
  );
});

IconMaterialChairRoundedFilled.displayName = 'AmauiIconMaterialChairRoundedFilled';

export default IconMaterialChairRoundedFilled;
