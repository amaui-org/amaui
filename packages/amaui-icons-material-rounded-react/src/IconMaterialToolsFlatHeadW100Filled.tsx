import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialToolsFlatHeadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ToolsFlatHeadW100Filled'

      short_name='ToolsFlatHead'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.125 19.7V19h5.75v.7Zm0-1.7-.8-5.625 1.7-6.775h3.95l1.7 6.775-.8 5.625Zm.025-6.05h5.7l-1.4-5.65h-2.9Z"/>
    </Icon>
  );
});

IconMaterialToolsFlatHeadW100Filled.displayName = 'AmauiIconMaterialToolsFlatHeadW100Filled';

export default IconMaterialToolsFlatHeadW100Filled;
