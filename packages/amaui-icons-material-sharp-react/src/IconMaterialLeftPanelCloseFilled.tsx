import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelCloseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelCloseFilled'

      short_name='LeftPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M660 736V416L500 576l160 160ZM400 856h360V296H400v560Zm-280 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelCloseFilled.displayName = 'AmauiIconMaterialLeftPanelCloseFilled';

export default IconMaterialLeftPanelCloseFilled;
