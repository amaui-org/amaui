import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGastroenterology = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Gastroenterology'

      short_name='Gastroenterology'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22v-6q0-1.25.875-2.125T6 13h2q1.25 0 2.125-.875T11 10q0-.425-.287-.713Q10.425 9 10 9q-.825 0-1.412-.588Q8 7.825 8 7V2h2v5q1.25 0 2.125.875T13 10q0 2.075-1.462 3.537Q10.075 15 8 15H6q-.425 0-.713.287Q5 15.575 5 16v6Zm6 0H7v-2q0-1.25.875-2.125T10 17h4q2.075 0 3.538-1.463Q19 14.075 19 12v-1q0-2.075-1.462-3.538Q16.075 6 14 6q-.825 0-1.412-.588Q12 4.825 12 4V2h2v2q2.925 0 4.962 2.037Q21 8.075 21 11v1q0 2.925-2.038 4.962Q16.925 19 14 19h-4q-.425 0-.712.288Q9 19.575 9 20Zm-4 0v-6q0-.425.287-.713Q5.575 15 6 15h2q2.075 0 3.538-1.463Q13 12.075 13 10q0-1.25-.875-2.125T10 7V2v5q1.25 0 2.125.875T13 10q0 2.075-1.462 3.537Q10.075 15 8 15H6q-.425 0-.713.287Q5 15.575 5 16v6Z"/>
    </Icon>
  );
});

IconMaterialGastroenterology.displayName = 'AmauiIconMaterialGastroenterology';

export default IconMaterialGastroenterology;
