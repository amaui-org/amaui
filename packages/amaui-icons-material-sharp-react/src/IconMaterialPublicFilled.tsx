import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPublicFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublicFilled'

      short_name='Public'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm-1-2.05V18q-.825 0-1.412-.587Q9 16.825 9 16v-1l-4.8-4.8q-.075.45-.138.9Q4 11.55 4 12q0 3.025 1.988 5.3Q7.975 19.575 11 19.95Zm6.9-2.55q1.025-1.125 1.562-2.513Q20 13.5 20 12q0-2.45-1.362-4.475Q17.275 5.5 15 4.6V5q0 .825-.587 1.412Q13.825 7 13 7h-2v2q0 .425-.287.712Q10.425 10 10 10H8v2h6q.425 0 .713.287.287.288.287.713v3h1q.65 0 1.175.387.525.388.725 1.013Z"/>
    </Icon>
  );
});

IconMaterialPublicFilled.displayName = 'AmauiIconMaterialPublicFilled';

export default IconMaterialPublicFilled;
