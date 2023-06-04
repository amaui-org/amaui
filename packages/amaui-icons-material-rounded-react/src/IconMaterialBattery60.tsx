import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBattery60 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery60'

      short_name='Battery60'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 22q-.425 0-.713-.288Q7 21.425 7 21V5q0-.425.287-.713Q7.575 4 8 4h2V3q0-.425.288-.713Q10.575 2 11 2h2q.425 0 .713.287Q14 2.575 14 3v1h2q.425 0 .712.287Q17 4.575 17 5v16q0 .425-.288.712Q16.425 22 16 22Z"/>
    </Icon>
  );
});

IconMaterialBattery60.displayName = 'AmauiIconMaterialBattery60';

export default IconMaterialBattery60;
