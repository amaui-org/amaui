import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTheaterComedy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TheaterComedy'

      short_name='TheaterComedy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 7.5q.425 0 .712-.287Q20 6.925 20 6.5t-.288-.713Q19.425 5.5 19 5.5t-.712.287Q18 6.075 18 6.5t.288.713q.287.287.712.287Zm-4 0q.425 0 .713-.287Q16 6.925 16 6.5t-.287-.713Q15.425 5.5 15 5.5t-.712.287Q14 6.075 14 6.5t.288.713q.287.287.712.287Zm-.5 3.4h5q0-.875-.762-1.388Q17.975 9 17 9t-1.737.512q-.763.513-.763 1.388ZM7 22q-2.5 0-4.25-1.75T1 16V9h12v7q0 2.5-1.75 4.25T7 22Zm0-2q1.65 0 2.825-1.175Q11 17.65 11 16v-5H3v5q0 1.65 1.175 2.825Q5.35 20 7 20Zm10-5q-.65 0-1.287-.137-.638-.138-1.213-.413V12.1q.55.425 1.188.662Q16.325 13 17 13q1.65 0 2.825-1.175Q21 10.65 21 9V4h-8v3.5h-2V2h12v7q0 2.5-1.75 4.25T17 15Zm-12-.5q.425 0 .713-.288Q6 13.925 6 13.5t-.287-.713Q5.425 12.5 5 12.5t-.713.287Q4 13.075 4 13.5t.287.712q.288.288.713.288Zm4 0q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q9.425 12.5 9 12.5t-.712.287Q8 13.075 8 13.5t.288.712q.287.288.712.288Zm-2 3.4q.975 0 1.738-.513Q9.5 16.875 9.5 16h-5q0 .875.763 1.387.762.513 1.737.513Zm0-2.4Zm10-7Z"/>
    </Icon>
  );
});

IconMaterialTheaterComedy.displayName = 'AmauiIconMaterialTheaterComedy';

export default IconMaterialTheaterComedy;
