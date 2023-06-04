import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEastW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EastW100Filled'

      short_name='East'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.3 18.175-.5-.5 5.325-5.325h-16.1v-.7h16.1L13.8 6.325l.5-.5L20.475 12Z"/>
    </Icon>
  );
});

IconMaterialEastW100Filled.displayName = 'AmauiIconMaterialEastW100Filled';

export default IconMaterialEastW100Filled;
