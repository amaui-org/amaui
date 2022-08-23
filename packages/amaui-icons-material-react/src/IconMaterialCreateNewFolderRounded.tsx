import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCreateNewFolderRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CreateNewFolderRounded'
      short_name='CreateNewFolder'

      {...props}
    >
      <path d="M15 16Q15.425 16 15.713 15.712Q16 15.425 16 15V14H17Q17.425 14 17.712 13.712Q18 13.425 18 13Q18 12.575 17.712 12.287Q17.425 12 17 12H16V11Q16 10.575 15.713 10.287Q15.425 10 15 10Q14.575 10 14.288 10.287Q14 10.575 14 11V12H13Q12.575 12 12.288 12.287Q12 12.575 12 13Q12 13.425 12.288 13.712Q12.575 14 13 14H14V15Q14 15.425 14.288 15.712Q14.575 16 15 16ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6ZM4 6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8Q4 8 4 8V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialCreateNewFolderRounded.displayName = 'AmauiIconMaterialCreateNewFolderRounded';

export default IconMaterialCreateNewFolderRounded;
