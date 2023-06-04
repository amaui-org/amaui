import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationChipW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationChipW100'

      short_name='LocationChip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15.4q.6-.55 1.088-1.1.487-.55.825-1.075.337-.525.512-1.025.175-.5.175-.95 0-1.075-.762-1.838Q13.075 8.65 12 8.65q-1.075 0-1.837.762-.763.763-.763 1.838 0 .425.162.887.163.463.488.988.325.525.813 1.087.487.563 1.137 1.188Zm0-3.4q-.425 0-.712-.288Q11 11.425 11 11t.288-.713Q11.575 10 12 10t.713.287Q13 10.575 13 11t-.287.712Q12.425 12 12 12Zm-4 5.7q-2.375 0-4.037-1.662Q2.3 14.375 2.3 12t1.663-4.037Q5.625 6.3 8 6.3h8q2.375 0 4.038 1.663Q21.7 9.625 21.7 12t-1.662 4.038Q18.375 17.7 16 17.7Zm0-.7h8q2.075 0 3.538-1.463Q21 14.075 21 12t-1.462-3.538Q18.075 7 16 7H8Q5.925 7 4.463 8.462 3 9.925 3 12q0 2.075 1.463 3.537Q5.925 17 8 17Zm4-5Z"/>
    </Icon>
  );
});

IconMaterialLocationChipW100.displayName = 'AmauiIconMaterialLocationChipW100';

export default IconMaterialLocationChipW100;
