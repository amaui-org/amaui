import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoTransferW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferW100Filled'

      short_name='NoTransfer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.3 22.3 16 17h1v2.7h-.7v-2H7.7v2H7v-2.2q-.5-.125-1.1-.837-.6-.713-.6-1.663V6.3L2.25 3.25l.5-.5L21.8 21.8Zm-2.725-6.525L14.1 11.3H18V6.4H9.2L6.8 4q.825-.35 2.113-.525Q10.2 3.3 12 3.3q3.6 0 5.15.625Q18.7 4.55 18.7 6v9q0 .2-.037.387-.038.188-.088.388ZM8.5 15.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q8.925 13.5 8.5 13.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM6 11.3h4.3L6 7Z"/>
    </Icon>
  );
});

IconMaterialNoTransferW100Filled.displayName = 'AmauiIconMaterialNoTransferW100Filled';

export default IconMaterialNoTransferW100Filled;
