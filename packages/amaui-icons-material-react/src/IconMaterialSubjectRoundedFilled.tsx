import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSubjectRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubjectRoundedFilled'
      short_name='Subject'

      {...props}
    >
      <path d="M5 19Q4.575 19 4.287 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H13Q13.425 17 13.713 17.288Q14 17.575 14 18Q14 18.425 13.713 18.712Q13.425 19 13 19ZM5 11Q4.575 11 4.287 10.712Q4 10.425 4 10Q4 9.575 4.287 9.287Q4.575 9 5 9H19Q19.425 9 19.712 9.287Q20 9.575 20 10Q20 10.425 19.712 10.712Q19.425 11 19 11ZM5 15Q4.575 15 4.287 14.712Q4 14.425 4 14Q4 13.575 4.287 13.287Q4.575 13 5 13H19Q19.425 13 19.712 13.287Q20 13.575 20 14Q20 14.425 19.712 14.712Q19.425 15 19 15ZM5 7Q4.575 7 4.287 6.713Q4 6.425 4 6Q4 5.575 4.287 5.287Q4.575 5 5 5H19Q19.425 5 19.712 5.287Q20 5.575 20 6Q20 6.425 19.712 6.713Q19.425 7 19 7Z"/>
    </Icon>
  );
});

IconMaterialSubjectRoundedFilled.displayName = 'AmauiIconMaterialSubjectRoundedFilled';

export default IconMaterialSubjectRoundedFilled;
