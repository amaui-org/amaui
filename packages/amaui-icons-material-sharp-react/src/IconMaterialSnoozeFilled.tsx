import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSnoozeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SnoozeFilled'

      short_name='Snooze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.5 15.65h5v-1.5h-2.8L14.5 11V9.65h-5v1.5h2.85l-2.85 3.2ZM12 22q-1.875 0-3.512-.712-1.638-.713-2.85-1.926-1.213-1.212-1.926-2.85Q3 14.875 3 13t.712-3.513q.713-1.637 1.926-2.85 1.212-1.212 2.85-1.924Q10.125 4 12 4t3.513.713q1.637.712 2.85 1.924 1.212 1.213 1.925 2.85Q21 11.125 21 13t-.712 3.512q-.713 1.638-1.925 2.85-1.213 1.213-2.85 1.926Q13.875 22 12 22ZM5.6 2.35 7 3.75 2.75 8l-1.4-1.4Zm12.8 0 4.25 4.25-1.4 1.4L17 3.75Z"/>
    </Icon>
  );
});

IconMaterialSnoozeFilled.displayName = 'AmauiIconMaterialSnoozeFilled';

export default IconMaterialSnoozeFilled;
