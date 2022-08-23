import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddRoundedFilled'
      short_name='BookmarkAdd'

      {...props}
    >
      <path d="M18 9Q17.575 9 17.288 8.712Q17 8.425 17 8V7H16Q15.575 7 15.288 6.713Q15 6.425 15 6Q15 5.575 15.288 5.287Q15.575 5 16 5H17V4Q17 3.575 17.288 3.287Q17.575 3 18 3Q18.425 3 18.712 3.287Q19 3.575 19 4V5H20Q20.425 5 20.712 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7H19V8Q19 8.425 18.712 8.712Q18.425 9 18 9ZM6.4 20.4Q5.9 20.6 5.45 20.312Q5 20.025 5 19.475V5Q5 4.175 5.588 3.587Q6.175 3 7 3H14Q13.5 3.75 13.25 4.438Q13 5.125 13 6Q13 7.8 14.137 9.175Q15.275 10.55 17 10.9Q17.575 10.975 18 10.975Q18.425 10.975 19 10.9V19.475Q19 20.025 18.55 20.312Q18.1 20.6 17.6 20.4L12 18Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddRoundedFilled.displayName = 'AmauiIconMaterialBookmarkAddRoundedFilled';

export default IconMaterialBookmarkAddRoundedFilled;
