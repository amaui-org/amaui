import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomLeftW100'

      short_name='PositionBottomLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M272 766h308v-68H272v68ZM172 884V268h616v616H172Zm28-28h560V296H200v560Zm0-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomLeftW100.displayName = 'AmauiIconMaterialPositionBottomLeftW100';

export default IconMaterialPositionBottomLeftW100;
