import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLink = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Link'

      short_name='Link'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-2.075 0-3.537-1.463Q2 14.075 2 12t1.463-3.538Q4.925 7 7 7h3q.425 0 .713.287Q11 7.575 11 8t-.287.712Q10.425 9 10 9H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h3q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 17 10 17Zm2-4q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11h6q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 13 15 13Zm5 4q-.425 0-.712-.288Q13 16.425 13 16t.288-.713Q13.575 15 14 15h3q1.25 0 2.125-.875T20 12q0-1.25-.875-2.125T17 9h-3q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h3q2.075 0 3.538 1.462Q22 9.925 22 12q0 2.075-1.462 3.537Q19.075 17 17 17Z"/>
    </Icon>
  );
});

IconMaterialLink.displayName = 'AmauiIconMaterialLink';

export default IconMaterialLink;
