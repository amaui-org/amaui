import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddSharpW100Filled'
      short_name='BookmarkAdd'

      {...props}
    >
      <path d="M6.3 19.05V4.3H13.7Q13.35 4.85 13.175 5.425Q13 6 13 6.65Q13 8.375 14.163 9.613Q15.325 10.85 17 10.975Q17.2 11 17.35 11Q17.5 11 17.7 10.975V19.05L12 16.6ZM17 9V7H15V6.3H17V4.3H17.7V6.3H19.7V7H17.7V9Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddSharpW100Filled.displayName = 'AmauiIconMaterialBookmarkAddSharpW100Filled';

export default IconMaterialBookmarkAddSharpW100Filled;
