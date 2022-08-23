import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialViewHeadlineRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewHeadlineRounded'
      short_name='ViewHeadline'

      {...props}
    >
      <path d="M4.975 15Q4.55 15 4.275 14.712Q4 14.425 4 14Q4 13.575 4.287 13.287Q4.575 13 5 13H19.025Q19.45 13 19.725 13.287Q20 13.575 20 14Q20 14.425 19.712 14.712Q19.425 15 19 15ZM4.975 19Q4.55 19 4.275 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H19.025Q19.45 17 19.725 17.288Q20 17.575 20 18Q20 18.425 19.712 18.712Q19.425 19 19 19ZM4.975 11Q4.55 11 4.275 10.712Q4 10.425 4 10Q4 9.575 4.287 9.287Q4.575 9 5 9H19.025Q19.45 9 19.725 9.287Q20 9.575 20 10Q20 10.425 19.712 10.712Q19.425 11 19 11ZM4.975 7Q4.55 7 4.275 6.713Q4 6.425 4 6Q4 5.575 4.287 5.287Q4.575 5 5 5H19.025Q19.45 5 19.725 5.287Q20 5.575 20 6Q20 6.425 19.712 6.713Q19.425 7 19 7Z"/>
    </Icon>
  );
});

IconMaterialViewHeadlineRounded.displayName = 'AmauiIconMaterialViewHeadlineRounded';

export default IconMaterialViewHeadlineRounded;
