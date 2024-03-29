import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealingFilled'

      short_name='Healing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.45 21.4 2.6 18.55q-.575-.575-.575-1.4t.575-1.4L15.75 2.6q.575-.575 1.4-.575t1.4.575l2.85 2.85q.575.575.575 1.4t-.575 1.4L8.25 21.4q-.575.575-1.4.575t-1.4-.575Zm7.25-3.05 5.65-5.65 3.05 3.05q.575.575.575 1.4t-.575 1.4l-2.85 2.85q-.575.575-1.4.575t-1.4-.575ZM12 15q.425 0 .713-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13t-.712.287Q11 13.575 11 14t.288.712Q11.575 15 12 15Zm-2-2q.425 0 .713-.288Q11 12.425 11 12t-.287-.713Q10.425 11 10 11t-.712.287Q9 11.575 9 12t.288.712Q9.575 13 10 13Zm4 0q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11t-.712.287Q13 11.575 13 12t.288.712Q13.575 13 14 13Zm-8.375-1.725L2.6 8.25q-.575-.575-.575-1.4t.575-1.4L5.45 2.6q.575-.575 1.4-.575t1.4.575l3.05 3.05ZM12 11q.425 0 .713-.288Q13 10.425 13 10t-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10t.288.712Q11.575 11 12 11Z"/>
    </Icon>
  );
});

IconMaterialHealingFilled.displayName = 'AmauiIconMaterialHealingFilled';

export default IconMaterialHealingFilled;
