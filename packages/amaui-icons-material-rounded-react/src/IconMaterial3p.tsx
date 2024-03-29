import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterial3p = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='3p'

      short_name='3p'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 14h8v-.55q0-1.1-1.1-1.775Q13.8 11 12 11q-1.8 0-2.9.675Q8 12.35 8 13.45Zm4-4q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10ZM2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h16q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18H6l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575Zm2-2.4L5.175 16H20V4H4ZM4 4v13.175Z"/>
    </Icon>
  );
});

IconMaterial3p.displayName = 'AmauiIconMaterial3p';

export default IconMaterial3p;
