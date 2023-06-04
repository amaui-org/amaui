import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStayPrimaryLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StayPrimaryLandscapeW100Filled'

      short_name='StayPrimaryLandscape'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.3 17.7V6.3h19.4v11.4Zm3.05-.7h13.3V7H5.35Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscapeW100Filled.displayName = 'AmauiIconMaterialStayPrimaryLandscapeW100Filled';

export default IconMaterialStayPrimaryLandscapeW100Filled;
