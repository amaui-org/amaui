import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPregnantWomanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PregnantWomanFilled'

      short_name='PregnantWoman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 6q-.825 0-1.412-.588Q9 4.825 9 4t.588-1.413Q10.175 2 11 2t1.413.587Q13 3.175 13 4q0 .825-.587 1.412Q11.825 6 11 6Zm.5 16q-.625 0-1.062-.438Q10 21.125 10 20.5V17H9q-.425 0-.712-.288Q8 16.425 8 16v-6q0-1.25.875-2.125T11 7q1.25 0 2.125.875T14 10q.9.375 1.45 1.2.55.825.55 1.8v3q0 .425-.287.712Q15.425 17 15 17h-2v3.5q0 .625-.438 1.062Q12.125 22 11.5 22Z"/>
    </Icon>
  );
});

IconMaterialPregnantWomanFilled.displayName = 'AmauiIconMaterialPregnantWomanFilled';

export default IconMaterialPregnantWomanFilled;
