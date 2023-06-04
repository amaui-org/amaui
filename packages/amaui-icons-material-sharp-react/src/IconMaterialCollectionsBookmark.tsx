import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollectionsBookmark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollectionsBookmark'

      short_name='CollectionsBookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 16h12V4h-2v7l-2.5-1.5L13 11V4H8Zm-2 2V2h16v16Zm-4 4V6h2v14h14v2ZM13 4h5Zm0 0h7H8h5Z"/>
    </Icon>
  );
});

IconMaterialCollectionsBookmark.displayName = 'AmauiIconMaterialCollectionsBookmark';

export default IconMaterialCollectionsBookmark;
