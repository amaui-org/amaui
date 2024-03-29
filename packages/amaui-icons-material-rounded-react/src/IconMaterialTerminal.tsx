import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTerminal = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Terminal'

      short_name='Terminal'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 17q-.425 0-.712-.288Q12 16.425 12 16t.288-.713Q12.575 15 13 15h4q.425 0 .712.287.288.288.288.713t-.288.712Q17.425 17 17 17Zm-6.2-.7q-.275-.275-.275-.7 0-.425.275-.7L8.675 13l-1.9-1.9q-.3-.3-.287-.7.012-.4.312-.7.3-.275.7-.288.4-.012.7.288l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.687.287Q7.1 16.6 6.8 16.3ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2h16V8H4v10Z"/>
    </Icon>
  );
});

IconMaterialTerminal.displayName = 'AmauiIconMaterialTerminal';

export default IconMaterialTerminal;
