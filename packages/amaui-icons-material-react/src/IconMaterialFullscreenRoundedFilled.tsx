import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFullscreenRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenRoundedFilled'
      short_name='Fullscreen'

      {...props}
    >
      <path d="M6 19Q5.575 19 5.287 18.712Q5 18.425 5 18V15Q5 14.575 5.287 14.287Q5.575 14 6 14Q6.425 14 6.713 14.287Q7 14.575 7 15V17H9Q9.425 17 9.713 17.288Q10 17.575 10 18Q10 18.425 9.713 18.712Q9.425 19 9 19ZM6 10Q5.575 10 5.287 9.712Q5 9.425 5 9V6Q5 5.575 5.287 5.287Q5.575 5 6 5H9Q9.425 5 9.713 5.287Q10 5.575 10 6Q10 6.425 9.713 6.713Q9.425 7 9 7H7V9Q7 9.425 6.713 9.712Q6.425 10 6 10ZM15 19Q14.575 19 14.288 18.712Q14 18.425 14 18Q14 17.575 14.288 17.288Q14.575 17 15 17H17V15Q17 14.575 17.288 14.287Q17.575 14 18 14Q18.425 14 18.712 14.287Q19 14.575 19 15V18Q19 18.425 18.712 18.712Q18.425 19 18 19ZM18 10Q17.575 10 17.288 9.712Q17 9.425 17 9V7H15Q14.575 7 14.288 6.713Q14 6.425 14 6Q14 5.575 14.288 5.287Q14.575 5 15 5H18Q18.425 5 18.712 5.287Q19 5.575 19 6V9Q19 9.425 18.712 9.712Q18.425 10 18 10Z"/>
    </Icon>
  );
});

IconMaterialFullscreenRoundedFilled.displayName = 'AmauiIconMaterialFullscreenRoundedFilled';

export default IconMaterialFullscreenRoundedFilled;
