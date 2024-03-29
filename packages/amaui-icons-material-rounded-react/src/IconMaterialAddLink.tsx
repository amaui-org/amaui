import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLink = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLink'

      short_name='AddLink'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-2.075 0-3.537-1.463Q2 14.075 2 12t1.463-3.538Q4.925 7 7 7h3q.425 0 .713.287Q11 7.575 11 8t-.287.712Q10.425 9 10 9H7q-1.25 0-2.125.875T4 12q0 1.25.875 2.125T7 15h3q.425 0 .713.287.287.288.287.713t-.287.712Q10.425 17 10 17Zm2-4q-.425 0-.712-.288Q8 12.425 8 12t.288-.713Q8.575 11 9 11h6q.425 0 .713.287.287.288.287.713t-.287.712Q15.425 13 15 13Zm13-1h-2q0-1.25-.875-2.125T17 9h-3q-.425 0-.712-.288Q13 8.425 13 8t.288-.713Q13.575 7 14 7h3q2.075 0 3.538 1.462Q22 9.925 22 12Zm-4 8q-.425 0-.712-.288Q17 19.425 17 19v-2h-2q-.425 0-.712-.288Q14 16.425 14 16t.288-.713Q14.575 15 15 15h2v-2q0-.425.288-.713Q17.575 12 18 12t.712.287Q19 12.575 19 13v2h2q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 17 21 17h-2v2q0 .425-.288.712Q18.425 20 18 20Z"/>
    </Icon>
  );
});

IconMaterialAddLink.displayName = 'AmauiIconMaterialAddLink';

export default IconMaterialAddLink;
