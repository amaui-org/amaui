import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestTrueRadiantFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestTrueRadiantFilled'

      short_name='NestTrueRadiant'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-1.25 0-2.125-.875T3 18V9q0-.425.288-.713Q3.575 8 4 8t.713.287Q5 8.575 5 9v9q0 .425.287.712Q5.575 19 6 19t.713-.288Q7 18.425 7 18V6q0-1.25.875-2.125T10 3q1.25 0 2.125.875T13 6v12q0 .425.288.712.287.288.712.288t.713-.288Q15 18.425 15 18V6q0-1.25.875-2.125T18 3q1.25 0 2.125.875T21 6v9q0 .425-.288.712Q20.425 16 20 16t-.712-.288Q19 15.425 19 15V6q0-.425-.288-.713Q18.425 5 18 5t-.712.287Q17 5.575 17 6v12q0 1.25-.875 2.125T14 21q-1.25 0-2.125-.875T11 18V6q0-.425-.287-.713Q10.425 5 10 5t-.712.287Q9 5.575 9 6v12q0 1.25-.875 2.125T6 21Z"/>
    </Icon>
  );
});

IconMaterialNestTrueRadiantFilled.displayName = 'AmauiIconMaterialNestTrueRadiantFilled';

export default IconMaterialNestTrueRadiantFilled;
