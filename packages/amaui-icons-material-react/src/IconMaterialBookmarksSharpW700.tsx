import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksSharpW700'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M19.075 19.225V3.375H7.225V0.225H22.225V19.225ZM4.925 19 9.425 17 13.925 19V8.525H4.925ZM1.775 23.775V5.375H17.075V23.775L9.425 20.425ZM4.925 8.525H13.925H9.425H4.925Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarksSharpW700;
