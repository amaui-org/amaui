import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDynamicFeedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DynamicFeedRoundedFilled'
      short_name='DynamicFeed'

      {...props}
    >
      <path d="M8 17Q7.175 17 6.588 16.413Q6 15.825 6 15V9Q6 8.575 6.287 8.287Q6.575 8 7 8Q7.425 8 7.713 8.287Q8 8.575 8 9V15Q8 15 8 15Q8 15 8 15H16Q16.425 15 16.712 15.287Q17 15.575 17 16Q17 16.425 16.712 16.712Q16.425 17 16 17ZM12 13Q11.175 13 10.588 12.412Q10 11.825 10 11V5Q10 4.175 10.588 3.587Q11.175 3 12 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V11Q22 11.825 21.413 12.412Q20.825 13 20 13ZM12 11H20Q20 11 20 11Q20 11 20 11V7H12V11Q12 11 12 11Q12 11 12 11ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V13Q2 12.575 2.288 12.287Q2.575 12 3 12Q3.425 12 3.713 12.287Q4 12.575 4 13V19Q4 19 4 19Q4 19 4 19H12Q12.425 19 12.713 19.288Q13 19.575 13 20Q13 20.425 12.713 20.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialDynamicFeedRoundedFilled.displayName = 'AmauiIconMaterialDynamicFeedRoundedFilled';

export default IconMaterialDynamicFeedRoundedFilled;
