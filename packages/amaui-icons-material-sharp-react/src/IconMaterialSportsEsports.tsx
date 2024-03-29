import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSportsEsports = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SportsEsports'

      short_name='SportsEsports'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m1.625 19 1.95-14h16.85l1.95 14H18.4l-3-3H8.6l-3 3ZM4.8 17l3-3h8.425l3 3h.875L18.65 7H5.35L3.925 17ZM17 13q.425 0 .712-.288Q18 12.425 18 12t-.288-.713Q17.425 11 17 11t-.712.287Q16 11.575 16 12t.288.712Q16.575 13 17 13Zm-2-3q.425 0 .713-.288Q16 9.425 16 9t-.287-.713Q15.425 8 15 8t-.712.287Q14 8.575 14 9t.288.712Q14.575 10 15 10Zm-7.25 3h1.5v-1.75H11v-1.5H9.25V8h-1.5v1.75H6v1.5h1.75Zm4.275-1Z"/>
    </Icon>
  );
});

IconMaterialSportsEsports.displayName = 'AmauiIconMaterialSportsEsports';

export default IconMaterialSportsEsports;
