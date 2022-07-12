import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBookmarksSharpW700Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarksSharpW700Filled'
      short_name='Bookmarks'

      {...props}
    >
      <path d="M19.075 19.225V3.375H7.225V0.225H22.225V19.225ZM1.775 23.775V5.375H17.075V23.775L9.425 20.425Z"/>
    </Icon>
  )
});

export default IconMaterialBookmarksSharpW700Filled;
