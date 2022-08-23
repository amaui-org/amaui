import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTopicRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopicRounded'
      short_name='Topic'

      {...props}
    >
      <path d="M7 12H17Q17.425 12 17.712 11.712Q18 11.425 18 11Q18 10.575 17.712 10.287Q17.425 10 17 10H7Q6.575 10 6.287 10.287Q6 10.575 6 11Q6 11.425 6.287 11.712Q6.575 12 7 12ZM7 16H13Q13.425 16 13.713 15.712Q14 15.425 14 15Q14 14.575 13.713 14.287Q13.425 14 13 14H7Q6.575 14 6.287 14.287Q6 14.575 6 15Q6 15.425 6.287 15.712Q6.575 16 7 16ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6ZM4 6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8Q4 8 4 8V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialTopicRounded.displayName = 'AmauiIconMaterialTopicRounded';

export default IconMaterialTopicRounded;
