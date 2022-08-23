import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFullscreenExitRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenExitRoundedFilled'
      short_name='FullscreenExit'

      {...props}
    >
      <path d="M9 19Q8.575 19 8.288 18.712Q8 18.425 8 18V16H6Q5.575 16 5.287 15.712Q5 15.425 5 15Q5 14.575 5.287 14.287Q5.575 14 6 14H9Q9.425 14 9.713 14.287Q10 14.575 10 15V18Q10 18.425 9.713 18.712Q9.425 19 9 19ZM6 10Q5.575 10 5.287 9.712Q5 9.425 5 9Q5 8.575 5.287 8.287Q5.575 8 6 8H8V6Q8 5.575 8.288 5.287Q8.575 5 9 5Q9.425 5 9.713 5.287Q10 5.575 10 6V9Q10 9.425 9.713 9.712Q9.425 10 9 10ZM15 19Q14.575 19 14.288 18.712Q14 18.425 14 18V15Q14 14.575 14.288 14.287Q14.575 14 15 14H18Q18.425 14 18.712 14.287Q19 14.575 19 15Q19 15.425 18.712 15.712Q18.425 16 18 16H16V18Q16 18.425 15.713 18.712Q15.425 19 15 19ZM15 10Q14.575 10 14.288 9.712Q14 9.425 14 9V6Q14 5.575 14.288 5.287Q14.575 5 15 5Q15.425 5 15.713 5.287Q16 5.575 16 6V8H18Q18.425 8 18.712 8.287Q19 8.575 19 9Q19 9.425 18.712 9.712Q18.425 10 18 10Z"/>
    </Icon>
  );
});

IconMaterialFullscreenExitRoundedFilled.displayName = 'AmauiIconMaterialFullscreenExitRoundedFilled';

export default IconMaterialFullscreenExitRoundedFilled;
