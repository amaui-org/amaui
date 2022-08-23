import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryAddCheckRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheckRounded'
      short_name='LibraryAddCheck'

      {...props}
    >
      <path d="M12 13.35Q12.3 13.65 12.7 13.65Q13.1 13.65 13.4 13.35L17.65 9.1Q17.95 8.8 17.95 8.387Q17.95 7.975 17.65 7.675Q17.35 7.375 16.938 7.375Q16.525 7.375 16.225 7.675L12.7 11.2L11.25 9.775Q10.975 9.5 10.562 9.5Q10.15 9.5 9.85 9.8Q9.575 10.075 9.575 10.5Q9.575 10.925 9.85 11.2ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM8 16H20Q20 16 20 16Q20 16 20 16V4Q20 4 20 4Q20 4 20 4H8Q8 4 8 4Q8 4 8 4V16Q8 16 8 16Q8 16 8 16ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V7Q2 6.575 2.288 6.287Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17Q17.425 20 17.712 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22ZM8 4Q8 4 8 4Q8 4 8 4V16Q8 16 8 16Q8 16 8 16Q8 16 8 16Q8 16 8 16V4Q8 4 8 4Q8 4 8 4Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddCheckRounded.displayName = 'AmauiIconMaterialLibraryAddCheckRounded';

export default IconMaterialLibraryAddCheckRounded;
