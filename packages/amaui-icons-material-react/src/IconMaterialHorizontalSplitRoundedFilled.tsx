import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHorizontalSplitRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HorizontalSplitRoundedFilled'
      short_name='HorizontalSplit'

      {...props}
    >
      <path d="M3.975 7Q3.55 7 3.275 6.713Q3 6.425 3 6Q3 5.575 3.288 5.287Q3.575 5 4 5H20.025Q20.45 5 20.725 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7ZM3.975 11Q3.55 11 3.275 10.712Q3 10.425 3 10Q3 9.575 3.288 9.287Q3.575 9 4 9H20.025Q20.45 9 20.725 9.287Q21 9.575 21 10Q21 10.425 20.712 10.712Q20.425 11 20 11ZM4 19Q3.575 19 3.288 18.712Q3 18.425 3 18V14Q3 13.575 3.288 13.287Q3.575 13 4 13H20Q20.425 13 20.712 13.287Q21 13.575 21 14V18Q21 18.425 20.712 18.712Q20.425 19 20 19ZM5 17H19V15H5ZM5 17V15H19V17Z"/>
    </Icon>
  );
});

IconMaterialHorizontalSplitRoundedFilled.displayName = 'AmauiIconMaterialHorizontalSplitRoundedFilled';

export default IconMaterialHorizontalSplitRoundedFilled;
