import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSpecialRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialRoundedFilled'
      short_name='FolderSpecial'

      {...props}
    >
      <path d="M14.9 14.95 15.975 15.775Q16.25 15.975 16.562 15.775Q16.875 15.575 16.75 15.225L16.35 13.85L17.55 12.9Q17.825 12.675 17.712 12.337Q17.6 12 17.225 12H15.8L15.375 10.675Q15.25 10.325 14.9 10.325Q14.55 10.325 14.425 10.675L14 12H12.575Q12.2 12 12.088 12.337Q11.975 12.675 12.25 12.9L13.45 13.85L13.05 15.225Q12.925 15.575 13.238 15.775Q13.55 15.975 13.825 15.775ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialRoundedFilled.displayName = 'AmauiIconMaterialFolderSpecialRoundedFilled';

export default IconMaterialFolderSpecialRoundedFilled;
