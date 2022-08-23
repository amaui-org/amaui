import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHailRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailRoundedFilled'
      short_name='Hail'

      {...props}
    >
      <path d="M12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6ZM10 22Q9.575 22 9.288 21.712Q9 21.425 9 21V10.1Q7.975 10.45 7.562 11.287Q7.15 12.125 7.05 13.1Q7 13.475 6.725 13.738Q6.45 14 6.075 14Q5.625 14 5.312 13.675Q5 13.35 5.05 12.925Q5.375 10.2 7.213 8.6Q9.05 7 12 7Q14.225 7 15.463 6.012Q16.7 5.025 16.95 3Q17 2.575 17.288 2.287Q17.575 2 18 2Q18.425 2 18.712 2.3Q19 2.6 18.95 3Q18.75 4.875 17.812 6.312Q16.875 7.75 15 8.4V21Q15 21.425 14.713 21.712Q14.425 22 14 22Q13.575 22 13.288 21.712Q13 21.425 13 21V16H11V21Q11 21.425 10.713 21.712Q10.425 22 10 22ZM5 22Q4.575 22 4.287 21.712Q4 21.425 4 21V17Q4 16.575 4.287 16.288Q4.575 16 5 16H6Q6.425 16 6.713 16.288Q7 16.575 7 17V21Q7 21.425 6.713 21.712Q6.425 22 6 22Z"/>
    </Icon>
  );
});

IconMaterialHailRoundedFilled.displayName = 'AmauiIconMaterialHailRoundedFilled';

export default IconMaterialHailRoundedFilled;
