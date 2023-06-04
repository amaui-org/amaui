import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAodW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AodW100Filled'

      short_name='Aod'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.4 11.1v-.7h7.2v.7Zm1 3v-.7h5.2v.7Zm-3.1 7.6V2.3h11.4v19.4Zm.7-3.05h10V5.35H7Z"/>
    </Icon>
  );
});

IconMaterialAodW100Filled.displayName = 'AmauiIconMaterialAodW100Filled';

export default IconMaterialAodW100Filled;
