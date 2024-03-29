import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightPanelOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelOpen'

      short_name='RightPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M460 688V464q0-14-12-19t-22 5l-98 98q-12 12-12 28t12 28l98 98q10 10 22 5t12-19ZM200 936q-33 0-56.5-23.5T120 856V296q0-33 23.5-56.5T200 216h560q33 0 56.5 23.5T840 296v560q0 33-23.5 56.5T760 936H200Zm440-80h120V296H640v560Zm-80 0V296H200v560h360Zm80 0h120-120Z"/>
    </Icon>
  );
});

IconMaterialRightPanelOpen.displayName = 'AmauiIconMaterialRightPanelOpen';

export default IconMaterialRightPanelOpen;
