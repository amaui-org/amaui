import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldWithHouseSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldWithHouseSharpW100'
      short_name='ShieldWithHouse'

      {...props}
    >
      <path d="M12 20.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Zm0-16.5L6 6.375V11.1q0 .35.025.675.025.325.075.65l5.9-4.6 5.9 4.6q.05-.325.075-.65Q18 11.45 18 11.1V6.375Zm-1.35 15.175V15.65h2.7v3.675q1.65-.9 2.813-2.525 1.162-1.625 1.612-3.6L12 8.7l-5.775 4.5q.45 1.975 1.613 3.6Q9 18.425 10.65 19.325Zm1.35-7.3Z"/>
    </Icon>
  );
});

IconMaterialShieldWithHouseSharpW100.displayName = 'AmauiIconMaterialShieldWithHouseSharpW100';

export default IconMaterialShieldWithHouseSharpW100;
