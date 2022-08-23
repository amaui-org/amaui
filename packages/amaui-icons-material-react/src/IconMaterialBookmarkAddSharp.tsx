import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddSharp'
      short_name='BookmarkAdd'

      {...props}
    >
      <path d="M5 21V3H13Q13 3.575 13 4Q13 4.425 13 5H7V17.95L12 15.8L17 17.95V11Q17.575 11 18 11Q18.425 11 19 11V21L12 18ZM7 5H13Q13 5 13 5Q13 5 13 5Q13 5 13 5Q13 5 13 5H12H7ZM17 9V7H15V5H17V3H19V5H21V7H19V9Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddSharp.displayName = 'AmauiIconMaterialBookmarkAddSharp';

export default IconMaterialBookmarkAddSharp;
