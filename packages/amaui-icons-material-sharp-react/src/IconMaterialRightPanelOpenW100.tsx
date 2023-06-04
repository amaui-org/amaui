import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightPanelOpenW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelOpenW100'

      short_name='RightPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M465 693V459L347 576l118 117Zm175 163h120V296H640v560Zm-440 0h412V296H200v560Zm440 0h120-120Zm-468 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialRightPanelOpenW100.displayName = 'AmauiIconMaterialRightPanelOpenW100';

export default IconMaterialRightPanelOpenW100;
