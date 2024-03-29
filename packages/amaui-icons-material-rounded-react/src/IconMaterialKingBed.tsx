import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKingBed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBed'

      short_name='KingBed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 17v-5.025q0-.825.588-1.4Q3.175 10 4 10V7q0-.825.588-1.412Q5.175 5 6 5h12q.825 0 1.413.588Q20 6.175 20 7v3q.825 0 1.413.587Q22 11.175 22 12v5h-1.35l-.475 1.5q-.075.225-.262.363-.188.137-.413.137-.25 0-.425-.163-.175-.162-.25-.387L18.35 17H5.65l-.475 1.5q-.075.225-.262.363Q4.725 19 4.5 19q-.25 0-.425-.163-.175-.162-.25-.387L3.35 17Zm11-7h5V7h-5Zm-7 0h5V7H6Zm-2 5h16v-3H4Zm16 0H4h16Z"/>
    </Icon>
  );
});

IconMaterialKingBed.displayName = 'AmauiIconMaterialKingBed';

export default IconMaterialKingBed;
