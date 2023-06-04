import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRightPanelOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RightPanelOpenFilled'

      short_name='RightPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M460 736V416L300 576l160 160ZM200 856h360V296H200v560Zm-80 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialRightPanelOpenFilled.displayName = 'AmauiIconMaterialRightPanelOpenFilled';

export default IconMaterialRightPanelOpenFilled;
