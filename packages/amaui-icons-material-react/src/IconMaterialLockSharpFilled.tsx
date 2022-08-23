import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLockSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LockSharpFilled'
      short_name='Lock'

      {...props}
    >
      <path d="M4 22V8H7V6Q7 3.925 8.463 2.462Q9.925 1 12 1Q14.075 1 15.538 2.462Q17 3.925 17 6V8H20V22ZM9 8H15V6Q15 4.75 14.125 3.875Q13.25 3 12 3Q10.75 3 9.875 3.875Q9 4.75 9 6ZM12 17Q12.825 17 13.413 16.413Q14 15.825 14 15Q14 14.175 13.413 13.587Q12.825 13 12 13Q11.175 13 10.588 13.587Q10 14.175 10 15Q10 15.825 10.588 16.413Q11.175 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialLockSharpFilled.displayName = 'AmauiIconMaterialLockSharpFilled';

export default IconMaterialLockSharpFilled;
