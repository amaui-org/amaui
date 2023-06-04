import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTollFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TollFilled'

      short_name='Toll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 20q-3.35 0-5.675-2.325Q7 15.35 7 12q0-3.35 2.325-5.675Q11.65 4 15 4q3.35 0 5.675 2.325Q23 8.65 23 12q0 3.35-2.325 5.675Q18.35 20 15 20Zm-9.375-.75q-2.1-.975-3.362-2.925Q1 14.375 1 12t1.263-4.325q1.262-1.95 3.362-2.925.525-.25.95.037.425.288.425.938 0 .25-.162.487-.163.238-.413.363-1.575.725-2.5 2.187Q3 10.225 3 12t.925 3.237q.925 1.463 2.5 2.188.25.125.413.35.162.225.162.5 0 .625-.425.925-.425.3-.95.05Z"/>
    </Icon>
  );
});

IconMaterialTollFilled.displayName = 'AmauiIconMaterialTollFilled';

export default IconMaterialTollFilled;
