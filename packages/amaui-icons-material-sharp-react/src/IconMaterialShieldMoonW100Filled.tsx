import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShieldMoonW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldMoonW100Filled'

      short_name='ShieldMoon'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.65q-2.875-.9-4.787-3.55-1.913-2.65-1.913-6V5.9L12 3.4l6.7 2.5v5.2q0 3.35-1.912 6-1.913 2.65-4.788 3.55Zm.525-5.3q.65 0 1.275-.213.625-.212 1.125-.637.125-.125.1-.225-.025-.1-.225-.175-.925-.325-1.637-.888-.713-.562-1.213-1.437-.35-.65-.587-1.725-.238-1.075.037-1.825.075-.2-.075-.3-.15-.1-.3-.05Q9.9 8.35 9.262 9.35q-.637 1-.637 2.15 0 1.6 1.15 2.725t2.75 1.125Z"/>
    </Icon>
  );
});

IconMaterialShieldMoonW100Filled.displayName = 'AmauiIconMaterialShieldMoonW100Filled';

export default IconMaterialShieldMoonW100Filled;
