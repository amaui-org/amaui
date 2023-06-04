import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveModeratorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModeratorW100'

      short_name='RemoveModerator'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17.8 15.3-.55-.55q.35-.8.55-1.775Q18 12 18 11.1V6.375L12 4.15 8.1 5.6l-.55-.55L12 3.4l6.7 2.5v5.2q0 .95-.2 1.975-.2 1.025-.7 2.225Zm2 5.5-3.3-3.3q-.875 1.1-2.05 1.938-1.175.837-2.45 1.212Q8.95 19.7 7.125 17 5.3 14.3 5.3 11.1V6.3l-2-2 .5-.5 16.5 16.5ZM11 12Zm1.675-1.825ZM12 19.9q1.125-.35 2.262-1.212Q15.4 17.825 16 17L6 7v4.1q0 3.025 1.7 5.5t4.3 3.3Z"/>
    </Icon>
  );
});

IconMaterialRemoveModeratorW100.displayName = 'AmauiIconMaterialRemoveModeratorW100';

export default IconMaterialRemoveModeratorW100;
