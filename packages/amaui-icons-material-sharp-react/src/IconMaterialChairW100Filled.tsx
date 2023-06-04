import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChairW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChairW100Filled'

      short_name='Chair'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.7 18.85V17.5H2.3V9.8H5v4.35h14V9.8h2.7v7.7h-2.4v1.35h-.65V17.5H5.4v1.35Zm1-5.4V9.1H4V5.9h16v3.2h-1.7v4.35Z"/>
    </Icon>
  );
});

IconMaterialChairW100Filled.displayName = 'AmauiIconMaterialChairW100Filled';

export default IconMaterialChairW100Filled;
