import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToRightFilled'

      short_name='DockToRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 856h360V296H400v560Zm-280 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDockToRightFilled.displayName = 'AmauiIconMaterialDockToRightFilled';

export default IconMaterialDockToRightFilled;
