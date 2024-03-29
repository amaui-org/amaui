import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFindInPageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPageFilled'

      short_name='FindInPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V2h11l5 6v11.65L15.45 15q.275-.425.413-.925Q16 13.575 16 13q0-1.65-1.175-2.825Q13.65 9 12 9q-1.65 0-2.825 1.175Q8 11.35 8 13q0 1.65 1.175 2.825Q10.35 17 12 17q.575 0 1.075-.137.5-.138.925-.413L19.55 22Zm8-7q-.825 0-1.412-.588Q10 13.825 10 13t.588-1.413Q11.175 11 12 11t1.413.587Q14 12.175 14 13q0 .825-.587 1.412Q12.825 15 12 15Z"/>
    </Icon>
  );
});

IconMaterialFindInPageFilled.displayName = 'AmauiIconMaterialFindInPageFilled';

export default IconMaterialFindInPageFilled;
