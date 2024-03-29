import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOtherHouses = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherHouses'

      short_name='OtherHouses'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21v-9.375L2.2 13 1 11.4 12 3l11 8.4-1.2 1.575-1.8-1.35V21Zm2-2h12v-8.9l-6-4.575L6 10.1Zm0 0h12H6Zm2-4q-.425 0-.713-.288Q7 14.425 7 14t.287-.713Q7.575 13 8 13t.713.287Q9 13.575 9 14t-.287.712Q8.425 15 8 15Zm4 0q-.425 0-.712-.288Q11 14.425 11 14t.288-.713Q11.575 13 12 13t.713.287Q13 13.575 13 14t-.287.712Q12.425 15 12 15Zm4 0q-.425 0-.712-.288Q15 14.425 15 14t.288-.713Q15.575 13 16 13t.712.287Q17 13.575 17 14t-.288.712Q16.425 15 16 15Z"/>
    </Icon>
  );
});

IconMaterialOtherHouses.displayName = 'AmauiIconMaterialOtherHouses';

export default IconMaterialOtherHouses;
