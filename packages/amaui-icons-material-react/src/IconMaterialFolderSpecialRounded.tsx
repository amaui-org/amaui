import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFolderSpecialRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FolderSpecialRounded'
      short_name='FolderSpecial'

      {...props}
    >
      <path d="M14.9 14.95 15.975 15.775Q16.25 16 16.55 15.787Q16.85 15.575 16.75 15.225L16.35 13.85L17.55 12.9Q17.825 12.7 17.7 12.35Q17.575 12 17.225 12H15.8L15.375 10.675Q15.25 10.325 14.9 10.325Q14.55 10.325 14.425 10.675L14 12H12.575Q12.225 12 12.1 12.35Q11.975 12.7 12.25 12.9L13.45 13.85L13.05 15.225Q12.95 15.575 13.25 15.787Q13.55 16 13.825 15.775ZM4 20Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.175 2.588 4.588Q3.175 4 4 4H9.175Q9.575 4 9.938 4.15Q10.3 4.3 10.575 4.575L12 6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V18Q22 18.825 21.413 19.413Q20.825 20 20 20ZM4 6V18Q4 18 4 18Q4 18 4 18H20Q20 18 20 18Q20 18 20 18V8Q20 8 20 8Q20 8 20 8H11.175L9.175 6H4Q4 6 4 6Q4 6 4 6ZM4 6Q4 6 4 6Q4 6 4 6V8Q4 8 4 8Q4 8 4 8V18Q4 18 4 18Q4 18 4 18Q4 18 4 18Q4 18 4 18Z"/>
    </Icon>
  );
});

IconMaterialFolderSpecialRounded.displayName = 'AmauiIconMaterialFolderSpecialRounded';

export default IconMaterialFolderSpecialRounded;
