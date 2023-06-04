import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPositionBottomLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PositionBottomLeftW100Filled'

      short_name='PositionBottomLeft'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M272 766h308v-68H272v68ZM172 884V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialPositionBottomLeftW100Filled.displayName = 'AmauiIconMaterialPositionBottomLeftW100Filled';

export default IconMaterialPositionBottomLeftW100Filled;
