import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLeakAddSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeakAddSharpFilled'
      short_name='LeakAdd'

      {...props}
    >
      <path d="M3 6V3H6Q6 4.25 5.125 5.125Q4.25 6 3 6ZM3 14V12Q4.85 12 6.488 11.287Q8.125 10.575 9.35 9.35Q10.575 8.125 11.288 6.487Q12 4.85 12 3H14Q14 5.275 13.137 7.275Q12.275 9.275 10.775 10.775Q9.275 12.275 7.275 13.137Q5.275 14 3 14ZM3 10V8Q5.075 8 6.537 6.537Q8 5.075 8 3H10Q10 5.9 7.95 7.95Q5.9 10 3 10ZM10 21Q10 18.725 10.863 16.725Q11.725 14.725 13.225 13.225Q14.725 11.725 16.725 10.863Q18.725 10 21 10V12Q19.15 12 17.513 12.712Q15.875 13.425 14.65 14.65Q13.425 15.875 12.713 17.512Q12 19.15 12 21ZM18 21Q18 19.75 18.875 18.875Q19.75 18 21 18V21ZM14 21Q14 18.1 16.05 16.05Q18.1 14 21 14V16Q18.925 16 17.462 17.462Q16 18.925 16 21Z"/>
    </Icon>
  );
});

IconMaterialLeakAddSharpFilled.displayName = 'AmauiIconMaterialLeakAddSharpFilled';

export default IconMaterialLeakAddSharpFilled;
