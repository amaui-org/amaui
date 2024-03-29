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
      <path d="M4 22q-.425 0-.712-.288Q3 21.425 3 21v-5q0-1.25.875-2.125T6 13h2q1.25 0 2.125-.875T11 10q0-.425-.287-.713Q10.425 9 10 9q-.825 0-1.412-.588Q8 7.825 8 7V3q0-.425.288-.713Q8.575 2 9 2h4q.425 0 .713.287Q14 2.575 14 3v1q2.925 0 4.962 2.037Q21 8.075 21 11v1q0 2.925-2.038 4.962Q16.925 19 14 19h-4q-.425 0-.712.288Q9 19.575 9 20v1q0 .425-.287.712Q8.425 22 8 22Z"/>
    </Icon>
  );
});

IconMaterialGastroenterologyFilled.displayName = 'AmauiIconMaterialGastroenterologyFilled';

export default IconMaterialGastroenterologyFilled;
