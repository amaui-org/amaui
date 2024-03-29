import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrokenImageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrokenImageFilled'

      short_name='BrokenImage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 9.575V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v6.575l-2.3-2.3q-.15-.15-.325-.213Q18.2 9 18 9t-.375.062q-.175.063-.325.213l-3.3 3.3-3.3-3.3q-.15-.15-.325-.213Q10.2 9 10 9t-.375.062q-.175.063-.325.213l-3.3 3.3ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19v-6.6l2.3 2.3q.15.15.325.212.175.063.375.063t.375-.063q.175-.062.325-.212l3.3-3.3 3.3 3.3q.15.15.325.212.175.063.375.063t.375-.063q.175-.062.325-.212l3.3-3.3 3 3V19q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialBrokenImageFilled.displayName = 'AmauiIconMaterialBrokenImageFilled';

export default IconMaterialBrokenImageFilled;
