import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollectionsBookmarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollectionsBookmarkW100Filled'

      short_name='CollectionsBookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.65 16.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7ZM13.65 4v5.85l1.85-1.1 1.85 1.1V4Z"/>
    </Icon>
  );
});

IconMaterialCollectionsBookmarkW100Filled.displayName = 'AmauiIconMaterialCollectionsBookmarkW100Filled';

export default IconMaterialCollectionsBookmarkW100Filled;
