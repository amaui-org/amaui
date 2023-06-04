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
      <path d="M21.05 22.05 16 17h1v2.35q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V17.7H7.7v1.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V17.5q-.5-.125-1.1-.837-.6-.713-.6-1.663V6.3L2.5 3.5q-.1-.1-.112-.238Q2.375 3.125 2.5 3t.25-.125q.125 0 .25.125l18.55 18.55q.1.1.113.238.012.137-.113.262t-.25.125q-.125 0-.25-.125Zm-2.475-6.275L14.1 11.3H18V6.4H9.2L6.8 4q.825-.35 2.113-.525Q10.2 3.3 12 3.3q3.6 0 5.15.625Q18.7 4.55 18.7 6v9q0 .2-.037.387-.038.188-.088.388ZM8.5 15.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q8.925 13.5 8.5 13.5t-.712.287q-.288.288-.288.713t.288.712q.287.288.712.288ZM6 11.3h4.3L6 7Z"/>
    </Icon>
  );
});

IconMaterialNoTransferW100Filled.displayName = 'AmauiIconMaterialNoTransferW100Filled';

export default IconMaterialNoTransferW100Filled;
