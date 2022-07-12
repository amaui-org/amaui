import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCollectionsBookmarkSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollectionsBookmarkSharp'
      short_name='CollectionsBookmark'

      {...props}
    >
      <path d="M8 16H20V4H18V11L15.5 9.5L13 11V4H8ZM6 18V2H22V18ZM2 22V6H4V20H18V22ZM13 4H15.5H18ZM13 4H15.5H18H20H8H13Z"/>
    </Icon>
  )
});

export default IconMaterialCollectionsBookmarkSharp;
