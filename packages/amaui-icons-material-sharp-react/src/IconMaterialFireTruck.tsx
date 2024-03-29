import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFireTruck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireTruck'

      short_name='FireTruck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 21q-1.25 0-2.125-.875T4 18H1v-7h11V5h4V3h3v2h2l2 6v7h-3q0 1.25-.875 2.125T17 21q-1.25 0-2.125-.875T14 18h-4q0 1.25-.875 2.125T7 21Zm0-2q.425 0 .713-.288Q8 18.425 8 18t-.287-.712Q7.425 17 7 17t-.713.288Q6 17.575 6 18t.287.712Q6.575 19 7 19Zm10 0q.425 0 .712-.288Q18 18.425 18 18t-.288-.712Q17.425 17 17 17t-.712.288Q16 17.575 16 18t.288.712Q16.575 19 17 19ZM3 13v3h1.775q.425-.475 1-.738Q6.35 15 7 15q.65 0 1.225.262.575.263 1 .738H12v-3Zm11 3h.775q.425-.475 1-.738Q16.35 15 17 15q.65 0 1.225.262.575.263 1 .738H21v-3h-7Zm0-5h6.9l-1.35-4H14ZM1 10V8.5h1v-2H1V5h10v1.5h-1v2h1V10Zm2.5-1.5h1.75v-2H3.5Zm3.25 0H8.5v-2H6.75ZM12 13H3Zm2 0h7-7Z"/>
    </Icon>
  );
});

IconMaterialFireTruck.displayName = 'AmauiIconMaterialFireTruck';

export default IconMaterialFireTruck;
