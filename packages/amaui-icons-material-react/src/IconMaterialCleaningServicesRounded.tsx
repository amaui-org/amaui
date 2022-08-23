import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCleaningServicesRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningServicesRounded'
      short_name='CleaningServices'

      {...props}
    >
      <path d="M3 21V16Q3 13.925 4.463 12.462Q5.925 11 8 11H9V4Q9 2.75 9.875 1.875Q10.75 1 12 1Q13.25 1 14.125 1.875Q15 2.75 15 4V11H16Q18.075 11 19.538 12.462Q21 13.925 21 16V21Q21 21.825 20.413 22.413Q19.825 23 19 23H5Q4.175 23 3.587 22.413Q3 21.825 3 21ZM5 21H7V18Q7 17.575 7.287 17.288Q7.575 17 8 17Q8.425 17 8.713 17.288Q9 17.575 9 18V21H11V18Q11 17.575 11.288 17.288Q11.575 17 12 17Q12.425 17 12.713 17.288Q13 17.575 13 18V21H15V18Q15 17.575 15.288 17.288Q15.575 17 16 17Q16.425 17 16.712 17.288Q17 17.575 17 18V21H19Q19 21 19 21Q19 21 19 21V16Q19 14.75 18.125 13.875Q17.25 13 16 13H8Q6.75 13 5.875 13.875Q5 14.75 5 16V21Q5 21 5 21Q5 21 5 21Z"/>
    </Icon>
  );
});

IconMaterialCleaningServicesRounded.displayName = 'AmauiIconMaterialCleaningServicesRounded';

export default IconMaterialCleaningServicesRounded;
