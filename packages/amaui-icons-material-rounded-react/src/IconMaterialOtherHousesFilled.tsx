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
      <path d="M5 21q-.425 0-.713-.288Q4 20.425 4 20v-8.375L3 12.4q-.35.275-.75.212-.4-.062-.65-.412t-.187-.75q.062-.4.387-.65l9.6-7.325q.125-.1.275-.163.15-.062.325-.062.175 0 .325.062.15.063.275.163l9.625 7.325q.325.25.375.65.05.4-.2.75-.25.325-.65.375-.4.05-.725-.2L20 11.625V20q0 .425-.288.712Q19.425 21 19 21Zm3-6q.425 0 .713-.288Q9 14.425 9 14t-.287-.713Q8.425 13 8 13t-.713.287Q7 13.575 7 14t.287.712Q7.575 15 8 15Zm4 0q.425 0 .713-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13t-.712.287Q11 13.575 11 14t.288.712Q11.575 15 12 15Zm4 0q.425 0 .712-.288Q17 14.425 17 14t-.288-.713Q16.425 13 16 13t-.712.287Q15 13.575 15 14t.288.712Q15.575 15 16 15Z"/>
    </Icon>
  );
});

IconMaterialOtherHousesFilled.displayName = 'AmauiIconMaterialOtherHousesFilled';

export default IconMaterialOtherHousesFilled;
