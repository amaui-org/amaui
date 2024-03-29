import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaundry = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Laundry'

      short_name='Laundry'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 13.975q.475-.2.975-.313.5-.112 1.025-.162V7.575L4.875 9.3 3.85 7.55 7.7 5.325q.6 1.225 1.763 1.95Q10.625 8 12 8t2.538-.725Q15.7 6.55 16.3 5.325l3.825 2.225-1 1.75L16 7.575V17.4q.1-.05.225-.125t.2-.125L18 15.775v-4.8L19.875 12l2.975-5.175L16.275 3H15q-.4 1.2-.95 2.1Q13.5 6 12 6q-1.5 0-2.05-.9Q9.4 4.2 9 3H7.725l-6.6 3.8 3 5.2L6 10.975Zm-1.35 5.4-1.3-1.525L5.525 16q.575-.5 1.313-.762.737-.263 1.537-.263.8 0 1.525.263.725.262 1.3.762l2.9 2.475q.3.25.712.388.413.137.838.137.45 0 .838-.125.387-.125.687-.4L19.35 16.6l1.3 1.55L18.475 20q-.575.5-1.3.75-.725.25-1.525.25-.8 0-1.537-.25-.738-.25-1.313-.75l-2.9-2.475q-.3-.25-.687-.388Q8.825 17 8.375 17q-.425 0-.838.137-.412.138-.712.388ZM12 8Z"/>
    </Icon>
  );
});

IconMaterialLaundry.displayName = 'AmauiIconMaterialLaundry';

export default IconMaterialLaundry;
