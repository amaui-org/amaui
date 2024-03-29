import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBathroom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Bathroom'

      short_name='Bathroom'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v20Zm2-2h16V4H4Zm5-2q.425 0 .713-.288Q10 17.425 10 17t-.287-.712Q9.425 16 9 16t-.712.288Q8 16.575 8 17t.288.712Q8.575 18 9 18Zm3 0q.425 0 .713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18Zm3 0q.425 0 .713-.288Q16 17.425 16 17t-.287-.712Q15.425 16 15 16t-.712.288Q14 16.575 14 17t.288.712Q14.575 18 15 18Zm-6-3q.425 0 .713-.288Q10 14.425 10 14t-.287-.713Q9.425 13 9 13t-.712.287Q8 13.575 8 14t.288.712Q8.575 15 9 15Zm3 0q.425 0 .713-.288Q13 14.425 13 14t-.287-.713Q12.425 13 12 13t-.712.287Q11 13.575 11 14t.288.712Q11.575 15 12 15Zm3 0q.425 0 .713-.288Q16 14.425 16 14t-.287-.713Q15.425 13 15 13t-.712.287Q14 13.575 14 14t.288.712Q14.575 15 15 15Zm-8-3h10v-1q0-2.075-1.462-3.538Q14.075 6 12 6 9.925 6 8.463 7.462 7 8.925 7 11Zm1.55-1.5q.2-1.275 1.163-2.137Q10.675 7.5 12 7.5t2.288.863q.962.862 1.162 2.137Zm3.45-3ZM4 4h16Z"/>
    </Icon>
  );
});

IconMaterialBathroom.displayName = 'AmauiIconMaterialBathroom';

export default IconMaterialBathroom;
