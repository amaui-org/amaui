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
      <path d="M460 736V416L300 576l160 160Zm180 120h120V296H640v560Zm-440 0h360V296H200v560Zm440 0h120-120Zm-520 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialRightPanelOpen.displayName = 'AmauiIconMaterialRightPanelOpen';

export default IconMaterialRightPanelOpen;
