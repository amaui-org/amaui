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
      <path d="M8.75 23q-.75 0-1.312-.488-.563-.487-.663-1.237L5.15 9.125q-.05-.45.25-.788Q5.7 8 6.15 8h11.7q.45 0 .75.337.3.338.25.788l-1.625 12.15q-.1.75-.663 1.237Q16 23 15.25 23Zm0-2h6.5l1.45-11H7.275L8.75 21ZM12 16q1.25 0 2.125-.875T15 13v-1q0-.425-.287-.713Q14.425 11 14 11t-.712.287Q13 11.575 13 12v1q0 .425-.287.712Q12.425 14 12 14t-.712-.288Q11 13.425 11 13v-1q0-.425-.287-.713Q10.425 11 10 11t-.712.287Q9 11.575 9 12v1q0 1.25.875 2.125T12 16Zm3-9q-.625 0-1.062-.438Q13.5 6.125 13.5 5.5t.438-1.062Q14.375 4 15 4t1.062.438q.438.437.438 1.062t-.438 1.062Q15.625 7 15 7Zm-5-1q-1.05 0-1.775-.725Q7.5 4.55 7.5 3.5q0-1.05.725-1.775Q8.95 1 10 1q1.05 0 1.775.725.725.725.725 1.775 0 1.05-.725 1.775Q11.05 6 10 6Zm5.25 15h-6.5 6.5Z"/>
    </Icon>
  );
});

IconMaterialCleaningBucket.displayName = 'AmauiIconMaterialCleaningBucket';

export default IconMaterialCleaningBucket;
