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
      <path d="M12 15q.825 0 1.413-.588Q14 13.825 14 13t-.587-1.413Q12.825 11 12 11q-.825 0-1.412.587Q10 12.175 10 13q0 .825.588 1.412Q11.175 15 12 15Zm-6 7q-.825 0-1.412-.587Q4 20.825 4 20V4q0-.825.588-1.413Q5.175 2 6 2h8.075q.425 0 .838.188.412.187.687.537l3.925 4.725q.225.275.35.6.125.325.125.675V19.55L15.45 15q.275-.425.413-.925Q16 13.575 16 13q0-1.65-1.175-2.825Q13.65 9 12 9q-1.65 0-2.825 1.175Q8 11.35 8 13q0 1.65 1.175 2.825Q10.35 17 12 17q.575 0 1.075-.137.5-.138.925-.413l5.2 5.15q-.275.2-.55.3-.275.1-.65.1Z"/>
    </Icon>
  );
});

IconMaterialFindInPageFilled.displayName = 'AmauiIconMaterialFindInPageFilled';

export default IconMaterialFindInPageFilled;
