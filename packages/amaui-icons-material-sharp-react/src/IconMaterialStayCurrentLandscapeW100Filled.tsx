import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayCurrentLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayCurrentLandscapeW100Filled'

      short_name='StayCurrentLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 17.7V6.3h19.4v11.4Zm3.05-.7h13.3V7H5.35Z"/>
    </Icon>
  );
});

IconMaterialStayCurrentLandscapeW100Filled.displayName = 'AmauiIconMaterialStayCurrentLandscapeW100Filled';

export default IconMaterialStayCurrentLandscapeW100Filled;
