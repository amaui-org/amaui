import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOtherHousesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherHousesFilled'

      short_name='OtherHouses'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-9.375L2.2 13 1 11.4 12 3l11 8.4-1.2 1.575-1.8-1.35V21Zm4-6q.425 0 .713-.288Q9 14.425 9 14t-.287-.713Q8.425 13 8 13t-.713.287Q7 13.575 7 14t.287.712Q7.575 15 8 15Zm4 0q.425 0 .713-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13t-.712.287Q11 13.575 11 14t.288.712Q11.575 15 12 15Zm4 0q.425 0 .712-.288Q17 14.425 17 14t-.288-.713Q16.425 13 16 13t-.712.287Q15 13.575 15 14t.288.712Q15.575 15 16 15Z"/>
    </Icon>
  );
});

IconMaterialOtherHousesFilled.displayName = 'AmauiIconMaterialOtherHousesFilled';

export default IconMaterialOtherHousesFilled;
