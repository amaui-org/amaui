import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFormatLineSpacingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FormatLineSpacingRoundedFilled'
      short_name='FormatLineSpacing'

      {...props}
    >
      <path d="M13 7Q12.575 7 12.288 6.713Q12 6.425 12 6Q12 5.575 12.288 5.287Q12.575 5 13 5H21Q21.425 5 21.712 5.287Q22 5.575 22 6Q22 6.425 21.712 6.713Q21.425 7 21 7ZM13 13Q12.575 13 12.288 12.712Q12 12.425 12 12Q12 11.575 12.288 11.287Q12.575 11 13 11H21Q21.425 11 21.712 11.287Q22 11.575 22 12Q22 12.425 21.712 12.712Q21.425 13 21 13ZM13 19Q12.575 19 12.288 18.712Q12 18.425 12 18Q12 17.575 12.288 17.288Q12.575 17 13 17H21Q21.425 17 21.712 17.288Q22 17.575 22 18Q22 18.425 21.712 18.712Q21.425 19 21 19ZM5.3 19.3 2.7 16.7Q2.425 16.425 2.413 16.012Q2.4 15.6 2.7 15.3Q2.975 15.025 3.388 15.012Q3.8 15 4.1 15.275L5 16.15V7.85L4.1 8.725Q3.825 9 3.413 9Q3 9 2.7 8.7Q2.425 8.425 2.425 8Q2.425 7.575 2.7 7.3L5.3 4.7Q5.6 4.4 6 4.4Q6.4 4.4 6.7 4.7L9.3 7.3Q9.575 7.575 9.588 7.987Q9.6 8.4 9.3 8.7Q9.025 8.975 8.613 8.988Q8.2 9 7.9 8.725L7 7.85V16.15L7.9 15.275Q8.175 15 8.588 15Q9 15 9.3 15.3Q9.575 15.575 9.575 16Q9.575 16.425 9.3 16.7L6.7 19.3Q6.4 19.6 6 19.6Q5.6 19.6 5.3 19.3Z"/>
    </Icon>
  );
});

IconMaterialFormatLineSpacingRoundedFilled.displayName = 'AmauiIconMaterialFormatLineSpacingRoundedFilled';

export default IconMaterialFormatLineSpacingRoundedFilled;
