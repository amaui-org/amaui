import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomRightW100Filled'

      short_name='PositionBottomRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M380 766h308v-68H380v68ZM172 884V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomRightW100Filled.displayName = 'AmauiIconMaterialPositionBottomRightW100Filled';

export default IconMaterialPositionBottomRightW100Filled;
