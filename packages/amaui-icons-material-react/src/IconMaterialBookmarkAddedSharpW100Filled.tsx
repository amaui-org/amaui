import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarkAddedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkAddedSharpW100Filled'
      short_name='BookmarkAdded'

      {...props}
    >
      <path d="M16.9 9 15 7.1 15.475 6.6 16.9 8.025 20.425 4.475 20.925 4.975ZM6.3 19.05V4.3H13.7Q13.35 4.85 13.175 5.425Q13 6 13 6.65Q13 8.375 14.163 9.613Q15.325 10.85 17 10.975Q17.2 11 17.35 11Q17.5 11 17.7 10.975V19.05L12 16.6Z"/>
    </Icon>
  );
});

IconMaterialBookmarkAddedSharpW100Filled.displayName = 'AmauiIconMaterialBookmarkAddedSharpW100Filled';

export default IconMaterialBookmarkAddedSharpW100Filled;
