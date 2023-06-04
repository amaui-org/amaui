import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMoveGroupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoveGroupW100Filled'

      short_name='MoveGroup'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M266 764V650h28v86h480V336H294v86h-28V228h536v536H266ZM158 872V368h28v476h476v28H158Zm332-193-19-19 108-110H266v-28h313L471 412l19-19 143 143-143 143Z"/>
    </Icon>
  );
});

IconMaterialMoveGroupW100Filled.displayName = 'AmauiIconMaterialMoveGroupW100Filled';

export default IconMaterialMoveGroupW100Filled;
