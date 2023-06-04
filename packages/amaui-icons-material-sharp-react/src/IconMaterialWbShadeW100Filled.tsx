import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWbShadeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbShadeW100Filled'

      short_name='WbShade'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.175 19-5.25-5.25v-1l6.25 6.25Zm-5.25 0v-2l2 2Zm-9 0V9.5h-1.1l4.1-4.1 4.1 4.1h-1.1V19Zm1.3-4.3h3.4V9.5h-3.4Z"/>
    </Icon>
  );
});

IconMaterialWbShadeW100Filled.displayName = 'AmauiIconMaterialWbShadeW100Filled';

export default IconMaterialWbShadeW100Filled;
