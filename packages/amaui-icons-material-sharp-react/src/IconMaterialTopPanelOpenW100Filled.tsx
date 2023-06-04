import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelOpenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelOpenW100Filled'

      short_name='TopPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m480 709 117-118H363l117 118ZM200 856h560V444H200v412Zm-28 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialTopPanelOpenW100Filled.displayName = 'AmauiIconMaterialTopPanelOpenW100Filled';

export default IconMaterialTopPanelOpenW100Filled;
