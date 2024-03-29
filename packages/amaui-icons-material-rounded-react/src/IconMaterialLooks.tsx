import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLooks = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks'

      short_name='Looks'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 17q-.425 0-.7-.3-.275-.3-.225-.7.35-2.55 2.313-4.275Q9.35 10 12 10q2.65 0 4.613 1.725Q18.575 13.45 18.925 16q.05.4-.225.7-.275.3-.7.3-.4 0-.7-.275-.3-.275-.4-.7-.35-1.725-1.712-2.875Q13.825 12 12 12q-1.825 0-3.188 1.15Q7.45 14.3 7.1 16.025q-.1.425-.4.7Q6.4 17 6 17Zm-4 0q-.425 0-.712-.3Q1 16.4 1.05 16q.2-2.1 1.125-3.925Q3.1 10.25 4.562 8.9q1.463-1.35 3.376-2.125Q9.85 6 12 6q2.15 0 4.062.775 1.913.775 3.376 2.125 1.462 1.35 2.4 3.175Q22.775 13.9 22.95 16q.05.4-.238.7-.287.3-.712.3-.4 0-.7-.288-.3-.287-.35-.712-.375-3.4-2.912-5.7Q15.5 8 12 8q-3.5 0-6.037 2.3Q3.425 12.6 3.05 16q-.05.425-.337.712Q2.425 17 2 17Z"/>
    </Icon>
  );
});

IconMaterialLooks.displayName = 'AmauiIconMaterialLooks';

export default IconMaterialLooks;
