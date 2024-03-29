import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeWork'

      short_name='HomeWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 9h2V7h-2Zm0 4h2v-2h-2Zm0 4h2v-2h-2Zm0 4v-2h4V5h-9v1.4l-2-1.45q0-.8.588-1.375Q11.175 3 12 3h9q.825 0 1.413.587Q23 4.175 23 5v14q0 .825-.587 1.413Q21.825 21 21 21Zm0-9.975ZM1 20v-7.975q0-.5.225-.925.225-.425.625-.7l5-3.575Q7.375 6.45 8 6.45q.625 0 1.15.375l5 3.575q.4.275.625.7.225.425.225.925V20q0 .425-.287.712Q14.425 21 14 21H9v-5H7v5H2q-.425 0-.712-.288Q1 20.425 1 20Zm2-1h2v-5h6v5h2v-7L8 8.45 3 12Zm8 0v-5H5v5-5h6Z"/>
    </Icon>
  );
});

IconMaterialHomeWork.displayName = 'AmauiIconMaterialHomeWork';

export default IconMaterialHomeWork;
