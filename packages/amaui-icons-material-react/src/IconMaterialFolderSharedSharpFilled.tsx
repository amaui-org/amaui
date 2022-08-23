import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSharedSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharedSharpFilled'
      short_name='FolderShared'

      {...props}
    >
      <path d="M15 13Q15.825 13 16.413 12.412Q17 11.825 17 11Q17 10.175 16.413 9.587Q15.825 9 15 9Q14.175 9 13.588 9.587Q13 10.175 13 11Q13 11.825 13.588 12.412Q14.175 13 15 13ZM11 17H19V16.45Q19 15.325 17.9 14.662Q16.8 14 15 14Q13.2 14 12.1 14.662Q11 15.325 11 16.45ZM2 20V4H10L12 6H22V20Z"/>
    </Icon>
  );
});

IconMaterialFolderSharedSharpFilled.displayName = 'AmauiIconMaterialFolderSharedSharpFilled';

export default IconMaterialFolderSharedSharpFilled;
