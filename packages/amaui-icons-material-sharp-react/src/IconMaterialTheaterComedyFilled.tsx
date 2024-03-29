import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTheaterComedyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheaterComedyFilled'

      short_name='TheaterComedy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22q-2.5 0-4.25-1.75T1 16V9h12v7q0 2.5-1.75 4.25T7 22Zm-2-7.5q.425 0 .713-.288Q6 13.925 6 13.5t-.287-.713Q5.425 12.5 5 12.5t-.713.287Q4 13.075 4 13.5t.287.712q.288.288.713.288Zm2 3.4q.975 0 1.738-.513Q9.5 16.875 9.5 16h-5q0 .875.763 1.387.762.513 1.737.513Zm2-3.4q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.425 12.5 9 12.5t-.712.287Q8 13.075 8 13.5t.288.712q.287.288.712.288Zm8 .5q-.65 0-1.287-.137-.638-.138-1.213-.413V7.5H11V2h12v7q0 2.5-1.75 4.25T17 15Zm-2-7.5q.425 0 .713-.287Q16 6.925 16 6.5t-.287-.713Q15.425 5.5 15 5.5t-.712.287Q14 6.075 14 6.5t.288.713q.287.287.712.287Zm-.5 3.4h5q0-.875-.762-1.388Q17.975 9 17 9q-.85 0-1.675.45-.825.45-.825 1.45ZM19 7.5q.425 0 .712-.287Q20 6.925 20 6.5t-.288-.713Q19.425 5.5 19 5.5t-.712.287Q18 6.075 18 6.5t.288.713q.287.287.712.287Z"/>
    </Icon>
  );
});

IconMaterialTheaterComedyFilled.displayName = 'AmauiIconMaterialTheaterComedyFilled';

export default IconMaterialTheaterComedyFilled;
