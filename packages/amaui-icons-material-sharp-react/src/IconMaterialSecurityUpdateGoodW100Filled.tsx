import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSecurityUpdateGoodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateGoodW100Filled'

      short_name='SecurityUpdateGood'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.05 14.1-1.9-1.9.5-.5 1.4 1.4 3.55-3.55.5.5ZM6.3 21.7V2.3h11.4v19.4Zm.7-3.05h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateGoodW100Filled.displayName = 'AmauiIconMaterialSecurityUpdateGoodW100Filled';

export default IconMaterialSecurityUpdateGoodW100Filled;
