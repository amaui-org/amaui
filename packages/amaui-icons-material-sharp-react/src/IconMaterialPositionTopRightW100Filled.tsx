import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionTopRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionTopRightW100Filled'

      short_name='PositionTopRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M380 454h308v-68H380v68ZM172 884V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialPositionTopRightW100Filled.displayName = 'AmauiIconMaterialPositionTopRightW100Filled';

export default IconMaterialPositionTopRightW100Filled;
