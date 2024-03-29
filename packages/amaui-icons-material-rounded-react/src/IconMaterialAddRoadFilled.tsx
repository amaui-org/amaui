import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRoadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRoadFilled'

      short_name='AddRoad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 23q-.425 0-.712-.288Q18 22.425 18 22v-2h-2q-.425 0-.712-.288Q15 19.425 15 19t.288-.712Q15.575 18 16 18h2v-2q0-.425.288-.713Q18.575 15 19 15t.712.287Q20 15.575 20 16v2h2q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 20 22 20h-2v2q0 .425-.288.712Q19.425 23 19 23Zm0-10q-.425 0-.712-.288Q18 12.425 18 12V5q0-.425.288-.713Q18.575 4 19 4t.712.287Q20 4.575 20 5v7q0 .425-.288.712Q19.425 13 19 13ZM5 20q-.425 0-.713-.288Q4 19.425 4 19V5q0-.425.287-.713Q4.575 4 5 4t.713.287Q6 4.575 6 5v14q0 .425-.287.712Q5.425 20 5 20Zm7-12q-.425 0-.712-.287Q11 7.425 11 7V5q0-.425.288-.713Q11.575 4 12 4t.713.287Q13 4.575 13 5v2q0 .425-.287.713Q12.425 8 12 8Zm0 6q-.425 0-.712-.288Q11 13.425 11 13v-2q0-.425.288-.713Q11.575 10 12 10t.713.287Q13 10.575 13 11v2q0 .425-.287.712Q12.425 14 12 14Zm0 6q-.425 0-.712-.288Q11 19.425 11 19v-2q0-.425.288-.712Q11.575 16 12 16t.713.288Q13 16.575 13 17v2q0 .425-.287.712Q12.425 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialAddRoadFilled.displayName = 'AmauiIconMaterialAddRoadFilled';

export default IconMaterialAddRoadFilled;
