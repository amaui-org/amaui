import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIcecreamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IcecreamW100Filled'

      short_name='Icecream'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.05 19.3q-.2 0-.375-.1t-.3-.3L8.1 12.45q-1.275.65-2.538-.163Q4.3 11.475 4.3 10q0-.875.563-1.662Q5.425 7.55 6.75 7.2q.275-2.35 1.825-3.625Q10.125 2.3 12 2.3q1.875 0 3.425 1.275Q16.975 4.85 17.25 7.2q1.325.35 1.888 1.138.562.787.562 1.662 0 1.5-1.187 2.262-1.188.763-2.513.188l-3.275 6.45q-.125.2-.3.3-.175.1-.375.1Zm0-.65 3.35-6.55-.35-.3q-.825.425-1.612.662-.788.238-1.438.238-.575 0-1.35-.2-.775-.2-1.6-.7l-.35.3Z"/>
    </Icon>
  );
});

IconMaterialIcecreamW100Filled.displayName = 'AmauiIconMaterialIcecreamW100Filled';

export default IconMaterialIcecreamW100Filled;
