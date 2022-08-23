import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddSharpW100'
      short_name='BookmarkAdd'

      {...props}
    >
      <path d="M6.3 19.05V4.3H13Q13 4.5 13 4.65Q13 4.8 13 5H7V17.95L12 15.8L17 17.95V11Q17.2 11 17.35 11Q17.5 11 17.7 11V19.05L12 16.6ZM7 5H13Q13 5 13 5Q13 5 13 5Q13 5 13 5Q13 5 13 5H12H7ZM17 9V7H15V6.3H17V4.3H17.7V6.3H19.7V7H17.7V9Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddSharpW100.displayName = 'AmauiIconMaterialBookmarkAddSharpW100';

export default IconMaterialBookmarkAddSharpW100;
