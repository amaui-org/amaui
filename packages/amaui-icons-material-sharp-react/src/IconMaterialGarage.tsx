import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGarage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Garage'

      short_name='Garage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 22V2h20v20Zm2-2h16V4H4Zm5-6q.425 0 .713-.288Q10 13.425 10 13t-.287-.713Q9.425 12 9 12t-.712.287Q8 12.575 8 13t.288.712Q8.575 14 9 14Zm6 0q.425 0 .713-.288Q16 13.425 16 13t-.287-.713Q15.425 12 15 12t-.712.287Q14 12.575 14 13t.288.712Q14.575 14 15 14ZM5 18.5h2v-2h10v2h2v-7.4l-1.925-5.6H6.925L5 11.1Zm2.65-9 .7-2h7.3l.7 2Zm-.65 5v-3h10v3ZM4 20V4v16Z"/>
    </Icon>
  );
});

IconMaterialGarage.displayName = 'AmauiIconMaterialGarage';

export default IconMaterialGarage;
