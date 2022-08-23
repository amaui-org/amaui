import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadFileRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileRoundedFilled'
      short_name='UploadFile'

      {...props}
    >
      <path d="M12 19Q12.425 19 12.713 18.712Q13 18.425 13 18V14.825L13.9 15.725Q14.175 16 14.588 16Q15 16 15.3 15.7Q15.575 15.425 15.575 15Q15.575 14.575 15.3 14.3L12.7 11.7Q12.55 11.55 12.375 11.487Q12.2 11.425 12 11.425Q11.8 11.425 11.625 11.487Q11.45 11.55 11.3 11.7L8.7 14.3Q8.425 14.575 8.425 14.988Q8.425 15.4 8.725 15.7Q9 15.975 9.425 15.975Q9.85 15.975 10.125 15.7L11 14.825V18Q11 18.425 11.288 18.712Q11.575 19 12 19ZM6 22Q5.175 22 4.588 21.413Q4 20.825 4 20V4Q4 3.175 4.588 2.587Q5.175 2 6 2H13.175Q13.575 2 13.938 2.15Q14.3 2.3 14.575 2.575L19.425 7.425Q19.7 7.7 19.85 8.062Q20 8.425 20 8.825V20Q20 20.825 19.413 21.413Q18.825 22 18 22ZM14 9H18L13 4V8Q13 8.425 13.288 8.712Q13.575 9 14 9Z"/>
    </Icon>
  );
});

IconMaterialUploadFileRoundedFilled.displayName = 'AmauiIconMaterialUploadFileRoundedFilled';

export default IconMaterialUploadFileRoundedFilled;
