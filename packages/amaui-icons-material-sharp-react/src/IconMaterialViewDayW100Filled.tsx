import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewDayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewDayW100Filled'

      short_name='ViewDay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 18.4v-.7h15.4v.7Zm0-3.7V9.3h15.4v5.4Zm0-8.4v-.7h15.4v.7Z"/>
    </Icon>
  );
});

IconMaterialViewDayW100Filled.displayName = 'AmauiIconMaterialViewDayW100Filled';

export default IconMaterialViewDayW100Filled;
