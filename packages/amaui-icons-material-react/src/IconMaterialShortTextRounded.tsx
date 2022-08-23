import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShortTextRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShortTextRounded'
      short_name='ShortText'

      {...props}
    >
      <path d="M5 11Q4.575 11 4.287 10.712Q4 10.425 4 10Q4 9.575 4.287 9.287Q4.575 9 5 9H19Q19.425 9 19.712 9.287Q20 9.575 20 10Q20 10.425 19.712 10.712Q19.425 11 19 11ZM5 15Q4.575 15 4.287 14.712Q4 14.425 4 14Q4 13.575 4.287 13.287Q4.575 13 5 13H13Q13.425 13 13.713 13.287Q14 13.575 14 14Q14 14.425 13.713 14.712Q13.425 15 13 15Z"/>
    </Icon>
  );
});

IconMaterialShortTextRounded.displayName = 'AmauiIconMaterialShortTextRounded';

export default IconMaterialShortTextRounded;
