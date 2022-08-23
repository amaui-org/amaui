import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRestoreFromTrashRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RestoreFromTrashRoundedFilled'
      short_name='RestoreFromTrash'

      {...props}
    >
      <path d="M7 21Q6.175 21 5.588 20.413Q5 19.825 5 19V6Q4.575 6 4.287 5.713Q4 5.425 4 5Q4 4.575 4.287 4.287Q4.575 4 5 4H9Q9 3.575 9.288 3.287Q9.575 3 10 3H14Q14.425 3 14.713 3.287Q15 3.575 15 4H19Q19.425 4 19.712 4.287Q20 4.575 20 5Q20 5.425 19.712 5.713Q19.425 6 19 6V19Q19 19.825 18.413 20.413Q17.825 21 17 21ZM11 11.85V15Q11 15.425 11.288 15.712Q11.575 16 12 16Q12.425 16 12.713 15.712Q13 15.425 13 15V11.85L13.9 12.725Q14.2 13 14.613 12.988Q15.025 12.975 15.3 12.7Q15.575 12.425 15.575 12Q15.575 11.575 15.3 11.3L12.7 8.7Q12.425 8.425 12 8.425Q11.575 8.425 11.3 8.7L8.7 11.3Q8.425 11.575 8.425 12Q8.425 12.425 8.7 12.7Q8.975 12.975 9.387 12.988Q9.8 13 10.1 12.725Z"/>
    </Icon>
  );
});

IconMaterialRestoreFromTrashRoundedFilled.displayName = 'AmauiIconMaterialRestoreFromTrashRoundedFilled';

export default IconMaterialRestoreFromTrashRoundedFilled;
