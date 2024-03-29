import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyRestroom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyRestroom'

      short_name='FamilyRestroom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 6q-.825 0-1.413-.588Q16 4.825 16 4t.587-1.413Q17.175 2 18 2q.825 0 1.413.587Q20 3.175 20 4q0 .825-.587 1.412Q18.825 6 18 6Zm-1 16V10.95h-1.825L16.525 7h2.95l3.025 9H20v6Zm-4.5-10.5q-.625 0-1.062-.438Q11 10.625 11 10t.438-1.062Q11.875 8.5 12.5 8.5t1.062.438Q14 9.375 14 10t-.438 1.062q-.437.438-1.062.438ZM5.5 6q-.825 0-1.412-.588Q3.5 4.825 3.5 4t.588-1.413Q4.675 2 5.5 2t1.412.587Q7.5 3.175 7.5 4q0 .825-.588 1.412Q6.325 6 5.5 6Zm-2 16v-7H2V7h7v8H7.5v7Zm7.5 0v-4h-1v-5.5h5V18h-1v4Z"/>
    </Icon>
  );
});

IconMaterialFamilyRestroom.displayName = 'AmauiIconMaterialFamilyRestroom';

export default IconMaterialFamilyRestroom;
