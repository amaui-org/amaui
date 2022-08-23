import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFilePresentRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilePresentRoundedFilled'
      short_name='FilePresent'

      {...props}
    >
      <path d="M6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H14.175Q14.575 2 14.938 2.15Q15.3 2.3 15.575 2.575L19.425 6.425Q19.7 6.7 19.85 7.062Q20 7.425 20 7.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM12 19Q13.675 19 14.838 17.825Q16 16.65 16 15V12Q16 11.575 15.713 11.287Q15.425 11 15 11Q14.575 11 14.288 11.287Q14 11.575 14 12V15Q14 15.825 13.425 16.413Q12.85 17 12 17Q11.175 17 10.588 16.413Q10 15.825 10 15V9.5Q10 9.275 10.15 9.137Q10.3 9 10.5 9Q10.725 9 10.863 9.137Q11 9.275 11 9.5V14Q11 14.425 11.288 14.712Q11.575 15 12 15Q12.425 15 12.713 14.712Q13 14.425 13 14V9.5Q13 8.45 12.275 7.725Q11.55 7 10.5 7Q9.45 7 8.725 7.725Q8 8.45 8 9.5V15Q8 16.65 9.175 17.825Q10.35 19 12 19ZM15 8H18L14 4V7Q14 7.425 14.288 7.713Q14.575 8 15 8Z"/>
    </Icon>
  );
});

IconMaterialFilePresentRoundedFilled.displayName = 'AmauiIconMaterialFilePresentRoundedFilled';

export default IconMaterialFilePresentRoundedFilled;
