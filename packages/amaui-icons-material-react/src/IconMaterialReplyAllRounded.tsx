import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialReplyAllRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ReplyAllRounded'
      short_name='ReplyAll'

      {...props}
    >
      <path d="M7.3 16.3 2.7 11.7Q2.55 11.55 2.488 11.375Q2.425 11.2 2.425 11Q2.425 10.8 2.488 10.625Q2.55 10.45 2.7 10.3L7.3 5.7Q7.575 5.425 7.988 5.412Q8.4 5.4 8.7 5.7Q9 5.975 9.012 6.387Q9.025 6.8 8.725 7.1L4.825 11L8.725 14.9Q9 15.175 9.012 15.6Q9.025 16.025 8.725 16.3Q8.45 16.6 8.025 16.6Q7.6 16.6 7.3 16.3ZM21 19Q20.575 19 20.288 18.712Q20 18.425 20 18V15Q20 13.75 19.125 12.875Q18.25 12 17 12H10.825L13.725 14.9Q14 15.175 14.012 15.6Q14.025 16.025 13.725 16.3Q13.45 16.6 13.025 16.6Q12.6 16.6 12.3 16.3L7.7 11.7Q7.55 11.55 7.488 11.375Q7.425 11.2 7.425 11Q7.425 10.8 7.488 10.625Q7.55 10.45 7.7 10.3L12.3 5.7Q12.575 5.425 12.988 5.412Q13.4 5.4 13.7 5.7Q14 5.975 14.012 6.387Q14.025 6.8 13.725 7.1L10.825 10H17Q19.075 10 20.538 11.462Q22 12.925 22 15V18Q22 18.425 21.712 18.712Q21.425 19 21 19Z"/>
    </Icon>
  );
});

IconMaterialReplyAllRounded.displayName = 'AmauiIconMaterialReplyAllRounded';

export default IconMaterialReplyAllRounded;
