import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLeftPanelOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LeftPanelOpenFilled'

      short_name='LeftPanelOpen'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M500 416v320l160-160-160-160ZM400 856h360V296H400v560Zm-280 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialLeftPanelOpenFilled.displayName = 'AmauiIconMaterialLeftPanelOpenFilled';

export default IconMaterialLeftPanelOpenFilled;
