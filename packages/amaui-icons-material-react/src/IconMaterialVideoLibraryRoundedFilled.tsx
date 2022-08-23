import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideoLibraryRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryRoundedFilled'
      short_name='VideoLibrary'

      {...props}
    >
      <path d="M13.05 13.5 17.2 10.85Q17.675 10.55 17.675 10Q17.675 9.45 17.2 9.15L13.05 6.5Q12.55 6.15 12.025 6.45Q11.5 6.75 11.5 7.325V12.675Q11.5 13.25 12.025 13.55Q12.55 13.85 13.05 13.5ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V7Q2 6.575 2.288 6.287Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17Q17.425 20 17.712 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryRoundedFilled.displayName = 'AmauiIconMaterialVideoLibraryRoundedFilled';

export default IconMaterialVideoLibraryRoundedFilled;
