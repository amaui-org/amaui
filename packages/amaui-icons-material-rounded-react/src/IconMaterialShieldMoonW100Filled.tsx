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
      <path d="M12.525 15.35q.65 0 1.275-.213.625-.212 1.125-.637.125-.125.1-.225-.025-.1-.225-.175-.925-.325-1.637-.888-.713-.562-1.213-1.437-.35-.65-.587-1.725-.238-1.075.037-1.825.075-.2-.075-.3-.15-.1-.3-.05Q9.9 8.35 9.262 9.35q-.637 1-.637 2.15 0 1.6 1.15 2.725t2.75 1.125ZM12 20.575h-.212q-.088 0-.163-.05-2.725-1-4.525-3.587Q5.3 14.35 5.3 11.1V6.95q0-.475.275-.863.275-.387.7-.562l5.2-1.925q.275-.1.525-.1t.525.1l5.2 1.925q.425.175.7.562.275.388.275.863v4.15q0 3.25-1.8 5.838-1.8 2.587-4.525 3.587-.1.05-.375.05Z"/>
    </Icon>
  );
});

IconMaterialShieldMoonW100Filled.displayName = 'AmauiIconMaterialShieldMoonW100Filled';

export default IconMaterialShieldMoonW100Filled;
