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
      <path d="M6.85 22.8 1.2 17.15 17.15 1.2l5.65 5.65Zm10.3 0-4.45-4.45 5.65-5.65 4.45 4.45ZM12 15q.425 0 .713-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13t-.712.287Q11 13.575 11 14t.288.712Q11.575 15 12 15Zm-2-2q.425 0 .713-.288Q11 12.425 11 12t-.287-.713Q10.425 11 10 11t-.712.287Q9 11.575 9 12t.288.712Q9.575 13 10 13Zm4 0q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11t-.712.287Q13 11.575 13 12t.288.712Q13.575 13 14 13Zm-8.375-1.725L1.2 6.85 6.85 1.2l4.425 4.425ZM12 11q.425 0 .713-.288Q13 10.425 13 10t-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10t.288.712Q11.575 11 12 11Z"/>
    </Icon>
  );
});

IconMaterialHealingFilled.displayName = 'AmauiIconMaterialHealingFilled';

export default IconMaterialHealingFilled;
