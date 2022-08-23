import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVerticalSplitRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalSplitRoundedFilled'
      short_name='VerticalSplit'

      {...props}
    >
      <path d="M4 15Q3.575 15 3.288 14.712Q3 14.425 3 14Q3 13.575 3.275 13.287Q3.55 13 3.975 13H10Q10.425 13 10.713 13.287Q11 13.575 11 14Q11 14.425 10.725 14.712Q10.45 15 10.025 15ZM4 19Q3.575 19 3.288 18.712Q3 18.425 3 18Q3 17.575 3.275 17.288Q3.55 17 3.975 17H10Q10.425 17 10.713 17.288Q11 17.575 11 18Q11 18.425 10.725 18.712Q10.45 19 10.025 19ZM4 11Q3.575 11 3.288 10.712Q3 10.425 3 10Q3 9.575 3.275 9.287Q3.55 9 3.975 9H10Q10.425 9 10.713 9.287Q11 9.575 11 10Q11 10.425 10.725 10.712Q10.45 11 10.025 11ZM4 7Q3.575 7 3.288 6.713Q3 6.425 3 6Q3 5.575 3.275 5.287Q3.55 5 3.975 5H10Q10.425 5 10.713 5.287Q11 5.575 11 6Q11 6.425 10.725 6.713Q10.45 7 10.025 7ZM14 19Q13.575 19 13.288 18.712Q13 18.425 13 18V6Q13 5.575 13.288 5.287Q13.575 5 14 5H20Q20.425 5 20.712 5.287Q21 5.575 21 6V18Q21 18.425 20.712 18.712Q20.425 19 20 19Z"/>
    </Icon>
  );
});

IconMaterialVerticalSplitRoundedFilled.displayName = 'AmauiIconMaterialVerticalSplitRoundedFilled';

export default IconMaterialVerticalSplitRoundedFilled;
