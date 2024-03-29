import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMilitaryTechFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTechFilled'

      short_name='MilitaryTech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 21.05q-.275.225-.588.012-.312-.212-.187-.562l.725-2.3-1.825-1.3q-.3-.2-.175-.55.125-.35.475-.35H10.8l.7-2.3-3.55-2.1q-.45-.275-.7-.725Q7 10.425 7 9.85V4q0-.825.588-1.413Q8.175 2 9 2h6q.825 0 1.413.587Q17 3.175 17 4v5.85q0 .575-.25 1.025-.25.45-.7.725l-3.55 2.1.7 2.3h2.225q.35 0 .475.35t-.175.55L13.9 18.2l.725 2.3q.125.35-.187.562-.313.213-.588-.012L12 19.65Zm1.85-9.4 1-.6V5q0-.425-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5v6.05Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTechFilled.displayName = 'AmauiIconMaterialMilitaryTechFilled';

export default IconMaterialMilitaryTechFilled;
