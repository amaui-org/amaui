import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightlife = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Nightlife'

      short_name='Nightlife'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.425 0-.713-.288Q5 19.425 5 19t.287-.712Q5.575 18 6 18h1v-4L2.025 6.55q-.35-.5-.05-1.025.3-.525.9-.525h10.25q.6 0 .9.525.3.525-.05 1.025L9 14v4h1q.425 0 .713.288.287.287.287.712t-.287.712Q10.425 20 10 20ZM5.9 9h4.2l1.4-2h-7ZM16 20q-1.25 0-2.125-.875T13 17q0-1.25.875-2.125T16 14q.275 0 .525.037.25.038.475.163V7q0-.825.587-1.412Q18.175 5 19 5h1.5q.625 0 1.062.438Q22 5.875 22 6.5t-.438 1.062Q21.125 8 20.5 8H19v9q0 1.25-.875 2.125T16 20Z"/>
    </Icon>
  );
});

IconMaterialNightlife.displayName = 'AmauiIconMaterialNightlife';

export default IconMaterialNightlife;
