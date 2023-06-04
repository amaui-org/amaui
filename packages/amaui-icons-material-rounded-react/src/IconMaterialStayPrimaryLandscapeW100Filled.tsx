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
      <path d="M3.8 17.7q-.65 0-1.075-.425Q2.3 16.85 2.3 16.2V7.8q0-.65.425-1.075Q3.15 6.3 3.8 6.3h16.4q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Zm1.55-.7h13.3V7H5.35Z"/>
    </Icon>
  );
});

IconMaterialStayPrimaryLandscapeW100Filled.displayName = 'AmauiIconMaterialStayPrimaryLandscapeW100Filled';

export default IconMaterialStayPrimaryLandscapeW100Filled;
