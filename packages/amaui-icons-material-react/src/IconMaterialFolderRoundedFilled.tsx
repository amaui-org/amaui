import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderRoundedFilled'
      short_name='Folder'

      {...props}
    >
      <path d="M4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialFolderRoundedFilled.displayName = 'AmauiIconMaterialFolderRoundedFilled';

export default IconMaterialFolderRoundedFilled;
