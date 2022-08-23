import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallSplitRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplitRoundedFilled'
      short_name='CallSplit'

      {...props}
    >
      <path d="M14.85 10.6 13.4 9.15 16.6 6H15Q14.575 6 14.288 5.713Q14 5.425 14 5Q14 4.575 14.288 4.287Q14.575 4 15 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5V9Q20 9.425 19.712 9.712Q19.425 10 19 10Q18.575 10 18.288 9.712Q18 9.425 18 9V7.4ZM12 20Q11.575 20 11.288 19.712Q11 19.425 11 19V12.4L6 7.4V9Q6 9.425 5.713 9.712Q5.425 10 5 10Q4.575 10 4.287 9.712Q4 9.425 4 9V5Q4 4.575 4.287 4.287Q4.575 4 5 4H9Q9.425 4 9.713 4.287Q10 4.575 10 5Q10 5.425 9.713 5.713Q9.425 6 9 6H7.4L13 11.6V19Q13 19.425 12.713 19.712Q12.425 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialCallSplitRoundedFilled.displayName = 'AmauiIconMaterialCallSplitRoundedFilled';

export default IconMaterialCallSplitRoundedFilled;
