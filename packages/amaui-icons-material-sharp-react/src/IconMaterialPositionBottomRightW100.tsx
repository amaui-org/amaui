import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomRightW100'

      short_name='PositionBottomRight'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M380 766h308v-68H380v68ZM172 884V268h616v616H172Zm28-28h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomRightW100.displayName = 'AmauiIconMaterialPositionBottomRightW100';

export default IconMaterialPositionBottomRightW100;
