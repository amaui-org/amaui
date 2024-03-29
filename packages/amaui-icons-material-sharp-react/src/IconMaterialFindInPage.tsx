import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFindInPage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FindInPage'

      short_name='FindInPage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q.825 0 1.413-.588Q14 13.825 14 13t-.587-1.413Q12.825 11 12 11q-.825 0-1.412.587Q10 12.175 10 13q0 .825.588 1.412Q11.175 15 12 15Zm-6 5h11.6l-3.575-3.575q-.425.275-.937.425Q12.575 17 12 17q-1.65 0-2.825-1.175Q8 14.65 8 13q0-1.65 1.175-2.825Q10.35 9 12 9q1.65 0 2.825 1.175Q16 11.35 16 13q0 .575-.15 1.075t-.425.925L18 17.575v-8.85L14.05 4H6Zm-2 2V2h11l5 6v14Zm9-9Z"/>
    </Icon>
  );
});

IconMaterialFindInPage.displayName = 'AmauiIconMaterialFindInPage';

export default IconMaterialFindInPage;
