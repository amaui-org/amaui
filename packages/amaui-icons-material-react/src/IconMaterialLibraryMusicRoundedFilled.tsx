import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLibraryMusicRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusicRoundedFilled'
      short_name='LibraryMusic'

      {...props}
    >
      <path d="M12.5 15Q13.55 15 14.275 14.275Q15 13.55 15 12.5V7H17.025Q17.45 7 17.725 6.713Q18 6.425 18 6Q18 5.575 17.712 5.287Q17.425 5 17 5H15Q14.575 5 14.288 5.287Q14 5.575 14 6V10.5Q13.675 10.25 13.3 10.125Q12.925 10 12.5 10Q11.45 10 10.725 10.725Q10 11.45 10 12.5Q10 13.55 10.725 14.275Q11.45 15 12.5 15ZM8 18Q7.175 18 6.588 17.413Q6 16.825 6 16V4Q6 3.175 6.588 2.587Q7.175 2 8 2H20Q20.825 2 21.413 2.587Q22 3.175 22 4V16Q22 16.825 21.413 17.413Q20.825 18 20 18ZM4 22Q3.175 22 2.588 21.413Q2 20.825 2 20V6.975Q2 6.55 2.288 6.275Q2.575 6 3 6Q3.425 6 3.713 6.287Q4 6.575 4 7V20Q4 20 4 20Q4 20 4 20H17.025Q17.45 20 17.725 20.288Q18 20.575 18 21Q18 21.425 17.712 21.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusicRoundedFilled.displayName = 'AmauiIconMaterialLibraryMusicRoundedFilled';

export default IconMaterialLibraryMusicRoundedFilled;
