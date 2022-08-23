import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddSharpFilled'
      short_name='BookmarkAdd'

      {...props}
    >
      <path d="M5 21V3H14Q13.5 3.75 13.25 4.438Q13 5.125 13 6Q13 7.8 14.137 9.175Q15.275 10.55 17 10.9Q17.575 10.975 18 10.975Q18.425 10.975 19 10.9V21L12 18ZM17 9V7H15V5H17V3H19V5H21V7H19V9Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddSharpFilled.displayName = 'AmauiIconMaterialBookmarkAddSharpFilled';

export default IconMaterialBookmarkAddSharpFilled;
