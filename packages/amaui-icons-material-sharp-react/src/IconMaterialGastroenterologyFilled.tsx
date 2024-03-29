import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGastroenterologyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GastroenterologyFilled'

      short_name='Gastroenterology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22v-6q0-1.25.875-2.125T6 13h2q1.25 0 2.125-.875T11 10q0-.425-.287-.713Q10.425 9 10 9q-.825 0-1.412-.588Q8 7.825 8 7V2h6v2q2.925 0 4.962 2.037Q21 8.075 21 11v1q0 2.925-2.038 4.962Q16.925 19 14 19h-4q-.425 0-.712.288Q9 19.575 9 20v2Z"/>
    </Icon>
  );
});

IconMaterialGastroenterologyFilled.displayName = 'AmauiIconMaterialGastroenterologyFilled';

export default IconMaterialGastroenterologyFilled;
