import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialGMobiledataRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='GMobiledataRoundedFilled'
      short_name='GMobiledata'

      {...props}
    >
      <path d="M9 17Q8.175 17 7.588 16.413Q7 15.825 7 15V9Q7 8.175 7.588 7.587Q8.175 7 9 7H15Q15.425 7 15.713 7.287Q16 7.575 16 8Q16 8.425 15.713 8.712Q15.425 9 15 9H9Q9 9 9 9Q9 9 9 9V15Q9 15 9 15Q9 15 9 15H14Q14 15 14 15Q14 15 14 15V13H13Q12.575 13 12.288 12.712Q12 12.425 12 12Q12 11.575 12.288 11.287Q12.575 11 13 11H15Q15.425 11 15.713 11.287Q16 11.575 16 12V15Q16 15.825 15.413 16.413Q14.825 17 14 17Z"/>
    </Icon>
  );
});

IconMaterialGMobiledataRoundedFilled.displayName = 'AmauiIconMaterialGMobiledataRoundedFilled';

export default IconMaterialGMobiledataRoundedFilled;
