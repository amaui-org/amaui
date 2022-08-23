import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderDeleteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderDeleteRoundedFilled'
      short_name='FolderDelete'

      {...props}
    >
      <path d="M14.5 17H16.5Q17.125 17 17.562 16.562Q18 16.125 18 15.5V11.5H18.25Q18.575 11.5 18.788 11.287Q19 11.075 19 10.75Q19 10.425 18.788 10.212Q18.575 10 18.25 10H16.5V9.75Q16.5 9.425 16.288 9.212Q16.075 9 15.75 9H15.25Q14.925 9 14.713 9.212Q14.5 9.425 14.5 9.75V10H12.75Q12.425 10 12.213 10.212Q12 10.425 12 10.75Q12 11.075 12.213 11.287Q12.425 11.5 12.75 11.5H13V15.5Q13 16.125 13.438 16.562Q13.875 17 14.5 17ZM14.5 15.5Q14.5 15.5 14.5 15.5Q14.5 15.5 14.5 15.5V11.5H16.5V15.5Q16.5 15.5 16.5 15.5Q16.5 15.5 16.5 15.5ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialFolderDeleteRoundedFilled.displayName = 'AmauiIconMaterialFolderDeleteRoundedFilled';

export default IconMaterialFolderDeleteRoundedFilled;
