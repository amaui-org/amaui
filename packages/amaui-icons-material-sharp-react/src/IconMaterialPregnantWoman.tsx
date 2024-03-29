import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPregnantWoman = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PregnantWoman'

      short_name='PregnantWoman'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 6q-.825 0-1.412-.588Q9 4.825 9 4t.588-1.413Q10.175 2 11 2t1.413.587Q13 3.175 13 4q0 .825-.587 1.412Q11.825 6 11 6Zm-1 16v-5H8v-7q0-1.25.875-2.125T11 7q1.25 0 2.125.875T14 10q.9.375 1.45 1.2.55.825.55 1.8v4h-3v5Z"/>
    </Icon>
  );
});

IconMaterialPregnantWoman.displayName = 'AmauiIconMaterialPregnantWoman';

export default IconMaterialPregnantWoman;
