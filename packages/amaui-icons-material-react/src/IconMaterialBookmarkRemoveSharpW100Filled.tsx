import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkRemoveSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkRemoveSharpW100Filled'
      short_name='BookmarkRemove'

      {...props}
    >
      <path d="M19.7 7H15V6.3H19.7ZM6.3 19.05V4.3H13.7Q13.35 4.85 13.175 5.425Q13 6 13 6.65Q13 8.375 14.163 9.613Q15.325 10.85 17 10.975Q17.2 11 17.35 11Q17.5 11 17.7 10.975V19.05L12 16.6Z"/>
    </Icon>
  );
});

IconMaterialBookmarkRemoveSharpW100Filled.displayName = 'AmauiIconMaterialBookmarkRemoveSharpW100Filled';

export default IconMaterialBookmarkRemoveSharpW100Filled;
