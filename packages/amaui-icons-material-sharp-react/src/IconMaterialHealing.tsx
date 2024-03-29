import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealing = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Healing'

      short_name='Healing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.85 22.8 1.2 17.15 6.35 12 1.2 6.85 6.85 1.2 12 6.35l5.15-5.15 5.65 5.65L17.65 12l5.15 5.15-5.65 5.65L12 17.65ZM12 11q.425 0 .713-.288Q13 10.425 13 10t-.287-.713Q12.425 9 12 9t-.712.287Q11 9.575 11 10t.288.712Q11.575 11 12 11Zm-4.25-.4 2.85-2.85L6.85 4 4 6.85ZM10 13q.425 0 .713-.288Q11 12.425 11 12t-.287-.713Q10.425 11 10 11t-.712.287Q9 11.575 9 12t.288.712Q9.575 13 10 13Zm2 2q.425 0 .713-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13t-.712.287Q11 13.575 11 14t.288.712Q11.575 15 12 15Zm2-2q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11t-.712.287Q13 11.575 13 12t.288.712Q13.575 13 14 13Zm3.15 7L20 17.15l-3.75-3.75-2.85 2.85ZM8.475 8.45Zm7.05 7.075Z"/>
    </Icon>
  );
});

IconMaterialHealing.displayName = 'AmauiIconMaterialHealing';

export default IconMaterialHealing;
