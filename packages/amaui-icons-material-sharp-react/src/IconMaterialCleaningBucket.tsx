import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCleaningBucket = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningBucket'

      short_name='CleaningBucket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 23H7L5 8h14Zm-.3-13H7.275L8.75 21h6.5ZM12 16q1.25 0 2.125-.875T15 13v-2h-2v2q0 .425-.287.712Q12.425 14 12 14t-.712-.288Q11 13.425 11 13v-2H9v2q0 1.25.875 2.125T12 16Zm3-9q-.625 0-1.062-.438Q13.5 6.125 13.5 5.5t.438-1.062Q14.375 4 15 4t1.062.438q.438.437.438 1.062t-.438 1.062Q15.625 7 15 7Zm-5-1q-1.05 0-1.775-.725Q7.5 4.55 7.5 3.5q0-1.05.725-1.775Q8.95 1 10 1q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q11.05 6 10 6ZM8.75 21Z"/>
    </Icon>
  );
});

IconMaterialCleaningBucket.displayName = 'AmauiIconMaterialCleaningBucket';

export default IconMaterialCleaningBucket;
