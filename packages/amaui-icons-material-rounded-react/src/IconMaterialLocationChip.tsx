import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationChip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationChip'

      short_name='LocationChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 16 .512-.438q.513-.437 1.113-1.124.6-.688 1.113-1.526.512-.837.512-1.662 0-1.35-.95-2.3Q13.35 8 12 8q-1.35 0-2.3.95-.95.95-.95 2.3 0 .825.512 1.662.513.838 1.113 1.526.6.687 1.113 1.124L12 16Zm0-4q-.425 0-.712-.288Q11 11.425 11 11t.288-.713Q11.575 10 12 10t.713.287Q13 10.575 13 11t-.287.712Q12.425 12 12 12Zm-4 7q-2.925 0-4.962-2.038Q1 14.925 1 12t2.038-4.963Q5.075 5 8 5h8q2.925 0 4.962 2.037Q23 9.075 23 12q0 2.925-2.038 4.962Q18.925 19 16 19Zm0-2h8q2.075 0 3.538-1.463Q21 14.075 21 12t-1.462-3.538Q18.075 7 16 7H8Q5.925 7 4.463 8.462 3 9.925 3 12q0 2.075 1.463 3.537Q5.925 17 8 17Zm4-5Z"/>
    </Icon>
  );
});

IconMaterialLocationChip.displayName = 'AmauiIconMaterialLocationChip';

export default IconMaterialLocationChip;
