import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHPlusMobiledataRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HPlusMobiledataRoundedFilled'
      short_name='HPlusMobiledata'

      {...props}
    >
      <path d="M5 17Q4.575 17 4.287 16.712Q4 16.425 4 16V8Q4 7.575 4.287 7.287Q4.575 7 5 7Q5.425 7 5.713 7.287Q6 7.575 6 8V11H12V8Q12 7.575 12.288 7.287Q12.575 7 13 7Q13.425 7 13.713 7.287Q14 7.575 14 8V16Q14 16.425 13.713 16.712Q13.425 17 13 17Q12.575 17 12.288 16.712Q12 16.425 12 16V13H6V16Q6 16.425 5.713 16.712Q5.425 17 5 17ZM19 15Q18.575 15 18.288 14.712Q18 14.425 18 14V13H17Q16.575 13 16.288 12.712Q16 12.425 16 12Q16 11.575 16.288 11.287Q16.575 11 17 11H18V10Q18 9.575 18.288 9.287Q18.575 9 19 9Q19.425 9 19.712 9.287Q20 9.575 20 10V11H21Q21.425 11 21.712 11.287Q22 11.575 22 12Q22 12.425 21.712 12.712Q21.425 13 21 13H20V14Q20 14.425 19.712 14.712Q19.425 15 19 15Z"/>
    </Icon>
  );
});

IconMaterialHPlusMobiledataRoundedFilled.displayName = 'AmauiIconMaterialHPlusMobiledataRoundedFilled';

export default IconMaterialHPlusMobiledataRoundedFilled;
