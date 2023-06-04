import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGoToLineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoToLineW100Filled'

      short_name='GoToLine'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M446 376v-68h68v68h-68Zm0 468v-68h68v68h-68Z"/>
    </Icon>
  );
});

IconMaterialGoToLineW100Filled.displayName = 'AmauiIconMaterialGoToLineW100Filled';

export default IconMaterialGoToLineW100Filled;
