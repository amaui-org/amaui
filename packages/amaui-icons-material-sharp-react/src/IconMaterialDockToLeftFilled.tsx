import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockToLeftFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToLeftFilled'

      short_name='DockToLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 856h360V296H200v560Zm-80 80V216h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDockToLeftFilled.displayName = 'AmauiIconMaterialDockToLeftFilled';

export default IconMaterialDockToLeftFilled;
