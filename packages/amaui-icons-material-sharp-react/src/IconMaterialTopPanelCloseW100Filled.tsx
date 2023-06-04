import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTopPanelCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TopPanelCloseW100Filled'

      short_name='TopPanelClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M363 709h234L480 591 363 709ZM200 856h560V444H200v412Zm-28 28V268h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialTopPanelCloseW100Filled.displayName = 'AmauiIconMaterialTopPanelCloseW100Filled';

export default IconMaterialTopPanelCloseW100Filled;
