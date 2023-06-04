import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollectionsBookmarkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollectionsBookmarkFilled'

      short_name='CollectionsBookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18V2h16v16Zm-4 4V6h2v14h14v2ZM13 4v7l2.5-1.5L18 11V4Z"/>
    </Icon>
  );
});

IconMaterialCollectionsBookmarkFilled.displayName = 'AmauiIconMaterialCollectionsBookmarkFilled';

export default IconMaterialCollectionsBookmarkFilled;
