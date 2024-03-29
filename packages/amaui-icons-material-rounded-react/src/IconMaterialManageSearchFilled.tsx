import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManageSearchFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageSearchFilled'

      short_name='ManageSearch'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 9q-.425 0-.712-.288Q2 8.425 2 8t.288-.713Q2.575 7 3 7h3q.425 0 .713.287Q7 7.575 7 8t-.287.712Q6.425 9 6 9Zm0 5q-.425 0-.712-.288Q2 13.425 2 13t.288-.713Q2.575 12 3 12h3q.425 0 .713.287Q7 12.575 7 13t-.287.712Q6.425 14 6 14Zm16.9 4.3-3.15-3.15q-.6.425-1.312.637Q14.725 16 14 16q-2.075 0-3.537-1.463Q9 13.075 9 11t1.463-3.538Q11.925 6 14 6t3.538 1.462Q19 8.925 19 11q0 .725-.212 1.438-.213.712-.638 1.312l3.15 3.15q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275ZM14 14q1.25 0 2.125-.875T17 11q0-1.25-.875-2.125T14 8q-1.25 0-2.125.875T11 11q0 1.25.875 2.125T14 14ZM3 19q-.425 0-.712-.288Q2 18.425 2 18t.288-.712Q2.575 17 3 17h8q.425 0 .713.288.287.287.287.712t-.287.712Q11.425 19 11 19Z"/>
    </Icon>
  );
});

IconMaterialManageSearchFilled.displayName = 'AmauiIconMaterialManageSearchFilled';

export default IconMaterialManageSearchFilled;
