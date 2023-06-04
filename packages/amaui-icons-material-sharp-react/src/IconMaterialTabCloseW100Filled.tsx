import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTabCloseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabCloseW100Filled'

      short_name='TabClose'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m450 599 84-84 84 84 19-19-84-84 84-84-19-19-84 84-84-84-19 19 84 84-84 84 19 19ZM266 764V228h536v536H266ZM158 872V368h28v476h476v28H158Z"/>
    </Icon>
  );
});

IconMaterialTabCloseW100Filled.displayName = 'AmauiIconMaterialTabCloseW100Filled';

export default IconMaterialTabCloseW100Filled;
