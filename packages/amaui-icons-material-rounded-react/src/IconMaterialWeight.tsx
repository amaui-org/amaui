import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWeight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Weight'

      short_name='Weight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19h12L16.575 9h-9.15L6 19Zm6-12q.425 0 .713-.287Q13 6.425 13 6t-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6t.288.713Q11.575 7 12 7Zm2.825 0h1.75q.75 0 1.3.5t.675 1.225l1.425 10q.125.9-.462 1.587Q18.925 21 18 21H6q-.925 0-1.512-.688-.588-.687-.463-1.587l1.425-10Q5.575 8 6.125 7.5q.55-.5 1.3-.5h1.75q-.075-.25-.125-.488Q9 6.275 9 6q0-1.25.875-2.125T12 3q1.25 0 2.125.875T15 6q0 .275-.05.512-.05.238-.125.488ZM6 19h12Z"/>
    </Icon>
  );
});

IconMaterialWeight.displayName = 'AmauiIconMaterialWeight';

export default IconMaterialWeight;
