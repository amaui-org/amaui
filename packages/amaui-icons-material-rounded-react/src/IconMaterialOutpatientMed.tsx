import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOutpatientMed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutpatientMed'

      short_name='OutpatientMed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 5q-.425 0-.712-.288Q2 4.425 2 4t.288-.713Q2.575 3 3 3h10q.425 0 .713.287Q14 3.575 14 4t-.287.712Q13.425 5 13 5Zm5 12.5q.625 0 1.062-.438Q9.5 16.625 9.5 16v-1h1q.625 0 1.062-.438Q12 14.125 12 13.5t-.438-1.062Q11.125 12 10.5 12h-1v-1q0-.625-.438-1.062Q8.625 9.5 8 9.5t-1.062.438Q6.5 10.375 6.5 11v1h-1q-.625 0-1.062.438Q4 12.875 4 13.5t.438 1.062Q4.875 15 5.5 15h1v1q0 .625.438 1.062.437.438 1.062.438ZM3 21q-.825 0-1.412-.587Q1 19.825 1 19V8q0-.825.588-1.412Q2.175 6 3 6h10q.825 0 1.413.588Q15 7.175 15 8v11q0 .825-.587 1.413Q13.825 21 13 21Zm0-2h10V8H3v11Zm15.775-4.2q-.3-.3-.3-.713 0-.412.3-.712L19.15 13H17q-.425 0-.712-.288Q16 12.425 16 12t.288-.713Q16.575 11 17 11h2.15l-.375-.375q-.3-.3-.287-.713.012-.412.312-.712t.713-.3q.412 0 .712.3l2.075 2.1q.3.3.3.7 0 .4-.3.7l-2.1 2.1q-.3.3-.712.3-.413 0-.713-.3ZM8 13.5Z"/>
    </Icon>
  );
});

IconMaterialOutpatientMed.displayName = 'AmauiIconMaterialOutpatientMed';

export default IconMaterialOutpatientMed;
