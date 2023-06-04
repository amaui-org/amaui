import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpenW100'

      short_name='LeftPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M495 459v234l118-117-118-117ZM200 856h120V296H200v560Zm148 0h412V296H348v560Zm-28 0H200h120Zm-148 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpenW100.displayName = 'AmauiIconMaterialLeftPanelOpenW100';

export default IconMaterialLeftPanelOpenW100;
