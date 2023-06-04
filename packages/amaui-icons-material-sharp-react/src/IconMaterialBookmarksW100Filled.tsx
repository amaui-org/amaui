import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarksW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksW100Filled'

      short_name='Bookmarks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.35 18.05V4.3H7.95v-.7h11.1v14.45Zm-13.4 3V6.3h11.4v14.75l-5.7-2.45Z"/>
    </Icon>
  );
});

IconMaterialBookmarksW100Filled.displayName = 'AmauiIconMaterialBookmarksW100Filled';

export default IconMaterialBookmarksW100Filled;
