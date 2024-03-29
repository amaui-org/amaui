import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrunchDining = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrunchDining'

      short_name='BrunchDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 22q-.425 0-.712-.288Q2 21.425 2 21v-1h14v1q0 .425-.287.712Q15.425 22 15 22Zm-1-4v-1q0-.425.288-.712Q2.575 16 3 16h4v-1q0-.425.287-.713Q7.575 14 8 14h2q.425 0 .713.287.287.288.287.713v1h4q.425 0 .713.288.287.287.287.712v1Zm17 4q-.425 0-.712-.288Q18 21.425 18 21v-5.1q-.9-1.025-1.45-2.025-.55-1-.55-2.425V3q0-.425.288-.713Q16.575 2 17 2h4q.425 0 .712.287Q22 2.575 22 3v8.45q0 1.425-.538 2.437Q20.925 14.9 20 15.9V20h1q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 22 21 22ZM18 8h2V4h-2Zm1 6.05q.45-.525.725-1.2.275-.675.275-1.4V10h-2v1.45q0 .725.25 1.4.25.675.75 1.2Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialBrunchDining.displayName = 'AmauiIconMaterialBrunchDining';

export default IconMaterialBrunchDining;
