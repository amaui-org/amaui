import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveModeratorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModeratorW100Filled'

      short_name='RemoveModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.8 15.3 7.55 5.05 12 3.4l6.7 2.5v5.2q0 .95-.2 1.975-.2 1.025-.7 2.225Zm2 5.5-3.3-3.3q-.875 1.1-2.05 1.938-1.175.837-2.45 1.212Q8.95 19.7 7.125 17 5.3 14.3 5.3 11.1V6.3l-2-2 .5-.5 16.5 16.5Z"/>
    </Icon>
  );
});

IconMaterialRemoveModeratorW100Filled.displayName = 'AmauiIconMaterialRemoveModeratorW100Filled';

export default IconMaterialRemoveModeratorW100Filled;
