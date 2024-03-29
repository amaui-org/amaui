import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightlifeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeFilled'

      short_name='Nightlife'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-.425 0-.713-.288Q5.5 19.425 5.5 19t.287-.712Q6.075 18 6.5 18h1v-4L2.525 6.55q-.35-.5-.05-1.025.3-.525.9-.525h10.25q.6 0 .9.525.3.525-.05 1.025L9.5 14v4h1q.425 0 .713.288.287.287.287.712t-.287.712Q10.925 20 10.5 20ZM6.4 9h4.2L12 7H5Zm10.1 11q-1.25 0-2.125-.875T13.5 17q0-1.25.875-2.125T16.5 14q.275 0 .525.037.25.038.475.163V7q0-.825.587-1.412Q18.675 5 19.5 5H21q.625 0 1.062.438.438.437.438 1.062t-.438 1.062Q21.625 8 21 8h-1.5v9q0 1.25-.875 2.125T16.5 20Z"/>
    </Icon>
  );
});

IconMaterialNightlifeFilled.displayName = 'AmauiIconMaterialNightlifeFilled';

export default IconMaterialNightlifeFilled;
