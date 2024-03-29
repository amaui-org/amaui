import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBatterySaver = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatterySaver'

      short_name='BatterySaver'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22q-.425 0-.713-.288Q7 21.425 7 21V5q0-.425.287-.713Q7.575 4 8 4h2V3q0-.425.288-.713Q10.575 2 11 2h2q.425 0 .713.287Q14 2.575 14 3v1h2q.425 0 .712.287Q17 4.575 17 5v16q0 .425-.288.712Q16.425 22 16 22Zm4-6q.425 0 .713-.288Q13 15.425 13 15v-1h1q.425 0 .713-.288Q15 13.425 15 13t-.287-.713Q14.425 12 14 12h-1v-1q0-.425-.287-.713Q12.425 10 12 10t-.712.287Q11 10.575 11 11v1h-1q-.425 0-.712.287Q9 12.575 9 13t.288.712Q9.575 14 10 14h1v1q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialBatterySaver.displayName = 'AmauiIconMaterialBatterySaver';

export default IconMaterialBatterySaver;
