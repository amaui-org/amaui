import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCollectionsBookmarkSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CollectionsBookmarkSharpFilled'
      short_name='CollectionsBookmark'

      {...props}
    >
      <path d="M6 18V2H22V18ZM2 22V6H4V20H18V22ZM13 4V11L15.5 9.5L18 11V4Z"/>
    </Icon>
  );
});

export default IconMaterialCollectionsBookmarkSharpFilled;
