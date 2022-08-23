import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMan4SharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man4SharpW100Filled'
      short_name='Man4'

      {...props}
    >
      <path d="M10.3 21.35 8.6 7.55h6.8l-1.7 13.8ZM12 5.75q-.65 0-1.125-.475T10.4 4.15q0-.65.475-1.125T12 2.55q.65 0 1.125.475T13.6 4.15q0 .65-.475 1.125T12 5.75Z"/>
    </Icon>
  );
});

IconMaterialMan4SharpW100Filled.displayName = 'AmauiIconMaterialMan4SharpW100Filled';

export default IconMaterialMan4SharpW100Filled;
