import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSharedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharedRoundedFilled'
      short_name='FolderShared'

      {...props}
    >
      <path d="M15 13Q15.825 13 16.413 12.412Q17 11.825 17 11Q17 10.175 16.413 9.587Q15.825 9 15 9Q14.175 9 13.588 9.587Q13 10.175 13 11Q13 11.825 13.588 12.412Q14.175 13 15 13ZM11 17H19V16.45Q19 15.325 17.9 14.662Q16.8 14 15 14Q13.2 14 12.1 14.662Q11 15.325 11 16.45ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialFolderSharedRoundedFilled.displayName = 'AmauiIconMaterialFolderSharedRoundedFilled';

export default IconMaterialFolderSharedRoundedFilled;
