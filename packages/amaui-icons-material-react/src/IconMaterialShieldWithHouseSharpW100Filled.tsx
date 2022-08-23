import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseSharpW100Filled'
      short_name='ShieldWithHouse'

      {...props}
    >
      <path d="m12 8.7 5.775 4.5q.05-.2.075-.388l.05-.387-5.9-4.6-5.9 4.6q.05.2.063.387.012.188.062.388Zm0 11.2q.35-.125.688-.25.337-.125.662-.325V15.65h-2.7v3.675q.325.2.662.325.338.125.688.25Zm0 .75q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseSharpW100Filled.displayName = 'AmauiIconMaterialShieldWithHouseSharpW100Filled';

export default IconMaterialShieldWithHouseSharpW100Filled;
