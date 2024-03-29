import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMilitaryTech = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MilitaryTech'

      short_name='MilitaryTech'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.15 21.05q-.275.225-.588.012-.312-.212-.187-.562l.725-2.3-1.825-1.3q-.3-.225-.175-.563.125-.337.475-.337H10.8l.7-2.3-3.55-2.1q-.45-.275-.7-.725Q7 10.425 7 9.85V4q0-.825.588-1.413Q8.175 2 9 2h6q.825 0 1.413.587Q17 3.175 17 4v5.85q0 .575-.25 1.025-.25.45-.7.725l-3.55 2.1.7 2.3h2.225q.35 0 .475.337.125.338-.175.563L13.9 18.2l.725 2.3q.125.35-.187.562-.313.213-.588-.012L12 19.65ZM9 4v5.85l2 1.2V4H9Zm6 0h-2v7.05l2-1.2Zm-3 3.825Zm-1-.3Zm2 0Z"/>
    </Icon>
  );
});

IconMaterialMilitaryTech.displayName = 'AmauiIconMaterialMilitaryTech';

export default IconMaterialMilitaryTech;
