import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeWorkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWorkFilled'

      short_name='HomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 21v-9.975q0-.5-.212-.925-.213-.425-.613-.7L10 4.95q0-.8.588-1.375Q11.175 3 12 3h9q.825 0 1.413.587Q23 4.175 23 5v14q0 .825-.587 1.413Q21.825 21 21 21Zm0-4h2v-2h-2Zm0-4h2v-2h-2Zm0-4h2V7h-2ZM1 20v-7.975q0-.5.225-.925.225-.425.625-.7l5-3.575Q7.375 6.45 8 6.45q.625 0 1.15.375l5 3.575q.4.275.625.7.225.425.225.925V20q0 .425-.287.712Q14.425 21 14 21h-4v-6H6v6H2q-.425 0-.712-.288Q1 20.425 1 20Z"/>
    </Icon>
  );
});

IconMaterialHomeWorkFilled.displayName = 'AmauiIconMaterialHomeWorkFilled';

export default IconMaterialHomeWorkFilled;
