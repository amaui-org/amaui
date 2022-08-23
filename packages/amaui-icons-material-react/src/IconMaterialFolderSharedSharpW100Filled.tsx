import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSharedSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSharedSharpW100Filled'
      short_name='FolderShared'

      {...props}
    >
      <path d="M15 12.6Q15.575 12.6 15.963 12.212Q16.35 11.825 16.35 11.25Q16.35 10.675 15.963 10.287Q15.575 9.9 15 9.9Q14.425 9.9 14.038 10.287Q13.65 10.675 13.65 11.25Q13.65 11.825 14.038 12.212Q14.425 12.6 15 12.6ZM11.9 16.1H18.1V16.05Q18.1 15.25 17.288 14.825Q16.475 14.4 15 14.4Q13.525 14.4 12.713 14.825Q11.9 15.25 11.9 16.05ZM3.3 18.7V6.3H11L12 7.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialFolderSharedSharpW100Filled.displayName = 'AmauiIconMaterialFolderSharedSharpW100Filled';

export default IconMaterialFolderSharedSharpW100Filled;
