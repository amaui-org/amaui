import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCollectionsBookmarkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollectionsBookmarkW100'

      short_name='CollectionsBookmark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.35 16h12V4h-2v5.85l-1.85-1.1-1.85 1.1V4h-6.3Zm-.7.7V3.3h13.4v13.4Zm-2.7 2.7V6.8h.7v11.9h11.9v.7ZM13.65 4h3.7Zm0 0h5.7-12 6.3Z"/>
    </Icon>
  );
});

IconMaterialCollectionsBookmarkW100.displayName = 'AmauiIconMaterialCollectionsBookmarkW100';

export default IconMaterialCollectionsBookmarkW100;
