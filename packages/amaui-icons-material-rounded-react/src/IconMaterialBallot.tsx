import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBallot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Ballot'

      short_name='Ballot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 10h3q.425 0 .712-.288Q17 9.425 17 9t-.288-.713Q16.425 8 16 8h-3q-.425 0-.712.287Q12 8.575 12 9t.288.712Q12.575 10 13 10Zm0 6h3q.425 0 .712-.288Q17 15.425 17 15t-.288-.713Q16.425 14 16 14h-3q-.425 0-.712.287Q12 14.575 12 15t.288.712Q12.575 16 13 16Zm-5-5h2q.425 0 .713-.288Q11 10.425 11 10V8q0-.425-.287-.713Q10.425 7 10 7H8q-.425 0-.713.287Q7 7.575 7 8v2q0 .425.287.712Q7.575 11 8 11Zm0 6h2q.425 0 .713-.288Q11 16.425 11 16v-2q0-.425-.287-.713Q10.425 13 10 13H8q-.425 0-.713.287Q7 13.575 7 14v2q0 .425.287.712Q7.575 17 8 17Zm-3 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm0 0V5v14Z"/>
    </Icon>
  );
});

IconMaterialBallot.displayName = 'AmauiIconMaterialBallot';

export default IconMaterialBallot;
