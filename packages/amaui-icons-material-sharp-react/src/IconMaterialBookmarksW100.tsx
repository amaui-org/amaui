import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBookmarksW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksW100'

      short_name='Bookmarks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.35 18.05V4.3H7.95v-.7h11.1v14.45Zm-12.7 1.9 5-2.15 5 2.15V7h-10Zm-.7 1.1V6.3h11.4v14.75l-5.7-2.45ZM5.65 7h10-10Z"/>
    </Icon>
  );
});

IconMaterialBookmarksW100.displayName = 'AmauiIconMaterialBookmarksW100';

export default IconMaterialBookmarksW100;
