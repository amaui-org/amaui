import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIosShareRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IosShareRounded'
      short_name='IosShare'

      {...props}
    >
      <path d="M12 16Q11.575 16 11.288 15.712Q11 15.425 11 15V4.825L10.1 5.725Q9.825 6 9.413 6Q9 6 8.7 5.7Q8.425 5.4 8.425 4.987Q8.425 4.575 8.7 4.3L11.3 1.7Q11.425 1.575 11.613 1.5Q11.8 1.425 12 1.425Q12.2 1.425 12.388 1.5Q12.575 1.575 12.7 1.7L15.3 4.3Q15.6 4.6 15.6 5.025Q15.6 5.45 15.3 5.725Q15 6 14.588 6Q14.175 6 13.9 5.725L13 4.825V15Q13 15.425 12.713 15.712Q12.425 16 12 16ZM6 23Q5.175 23 4.588 22.413Q4 21.825 4 21V10Q4 9.175 4.588 8.587Q5.175 8 6 8H8Q8.425 8 8.713 8.287Q9 8.575 9 9Q9 9.425 8.713 9.712Q8.425 10 8 10H6Q6 10 6 10Q6 10 6 10V21Q6 21 6 21Q6 21 6 21H18Q18 21 18 21Q18 21 18 21V10Q18 10 18 10Q18 10 18 10H16Q15.575 10 15.288 9.712Q15 9.425 15 9Q15 8.575 15.288 8.287Q15.575 8 16 8H18Q18.825 8 19.413 8.587Q20 9.175 20 10V21Q20 21.825 19.413 22.413Q18.825 23 18 23Z"/>
    </Icon>
  );
});

IconMaterialIosShareRounded.displayName = 'AmauiIconMaterialIosShareRounded';

export default IconMaterialIosShareRounded;
