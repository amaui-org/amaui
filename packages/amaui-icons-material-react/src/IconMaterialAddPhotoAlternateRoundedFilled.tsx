import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddPhotoAlternateRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddPhotoAlternateRoundedFilled'
      short_name='AddPhotoAlternate'

      {...props}
    >
      <path d="M18 9Q17.575 9 17.288 8.712Q17 8.425 17 8V7H16Q15.575 7 15.288 6.713Q15 6.425 15 6Q15 5.575 15.288 5.287Q15.575 5 16 5H17V4Q17 3.575 17.288 3.287Q17.575 3 18 3Q18.425 3 18.712 3.287Q19 3.575 19 4V5H20Q20.425 5 20.712 5.287Q21 5.575 21 6Q21 6.425 20.712 6.713Q20.425 7 20 7H19V8Q19 8.425 18.712 8.712Q18.425 9 18 9ZM7 17H17Q17.3 17 17.45 16.725Q17.6 16.45 17.4 16.2L14.65 12.525Q14.5 12.325 14.25 12.325Q14 12.325 13.85 12.525L11.25 16L9.4 13.525Q9.25 13.325 9 13.325Q8.75 13.325 8.6 13.525L6.6 16.2Q6.4 16.45 6.55 16.725Q6.7 17 7 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H13V8Q13 8.425 13.288 8.712Q13.575 9 14 9H15V10Q15 10.425 15.288 10.712Q15.575 11 16 11H21V19Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialAddPhotoAlternateRoundedFilled.displayName = 'AmauiIconMaterialAddPhotoAlternateRoundedFilled';

export default IconMaterialAddPhotoAlternateRoundedFilled;
