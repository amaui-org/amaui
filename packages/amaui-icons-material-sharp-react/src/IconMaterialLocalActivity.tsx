import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalActivity = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalActivity'

      short_name='LocalActivity'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20v-6q.825 0 1.413-.588Q4 12.825 4 12t-.587-1.413Q2.825 10 2 10V4h20v6q-.825 0-1.413.587Q20 11.175 20 12q0 .825.587 1.412Q21.175 14 22 14v6Zm2-2h16v-2.55q-.95-.525-1.475-1.463Q18 13.05 18 12t.525-1.988Q19.05 9.075 20 8.55V6H4v2.55q.95.525 1.475 1.462Q6 10.95 6 12t-.525 1.987Q4.95 14.925 4 15.45Zm5.2-2 2.8-2.1 2.75 2.1-1.05-3.4 2.8-2.2h-3.4L12 7l-1.1 3.4H7.5l2.75 2.2Zm2.8-4Z"/>
    </Icon>
  );
});

IconMaterialLocalActivity.displayName = 'AmauiIconMaterialLocalActivity';

export default IconMaterialLocalActivity;
