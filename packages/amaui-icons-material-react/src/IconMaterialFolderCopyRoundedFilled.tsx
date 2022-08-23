import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderCopyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderCopyRoundedFilled'
      short_name='FolderCopy'

      {...props}
    >
      <path d="M3 21Q2.175 21 1.588 20.413Q1 19.825 1 19V7Q1 6.575 1.288 6.287Q1.575 6 2 6Q2.425 6 2.713 6.287Q3 6.575 3 7V19Q3 19 3 19Q3 19 3 19H19Q19.425 19 19.712 19.288Q20 19.575 20 20Q20 20.425 19.712 20.712Q19.425 21 19 21ZM7 17Q6.175 17 5.588 16.413Q5 15.825 5 15V4Q5 3.175 5.588 2.587Q6.175 2 7 2H11.175Q11.575 2 11.938 2.15Q12.3 2.3 12.575 2.575L14 4H21Q21.825 4 22.413 4.588Q23 5.175 23 6V15Q23 15.825 22.413 16.413Q21.825 17 21 17Z"/>
    </Icon>
  );
});

IconMaterialFolderCopyRoundedFilled.displayName = 'AmauiIconMaterialFolderCopyRoundedFilled';

export default IconMaterialFolderCopyRoundedFilled;
