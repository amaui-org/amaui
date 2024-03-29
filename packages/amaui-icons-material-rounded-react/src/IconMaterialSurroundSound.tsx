import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSurroundSound = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SurroundSound'

      short_name='SurroundSound'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm5.675 1.1q.65-.9.988-1.938Q19 13.125 19 12t-.337-2.163Q18.325 8.8 17.675 7.9q-.275-.35-.725-.375-.45-.025-.8.325-.25.25-.25.6t.2.65q.45.65.675 1.388Q17 11.225 17 12t-.225 1.512q-.225.738-.675 1.388-.2.3-.2.65 0 .35.25.6.35.35.8.325.45-.025.725-.375Zm-9.825.05q.25-.25.25-.6t-.2-.65q-.45-.65-.675-1.388Q7 12.775 7 12t.225-1.512Q7.45 9.75 7.9 9.1q.2-.3.2-.65 0-.35-.25-.6-.35-.35-.8-.325-.45.025-.725.375-.65.9-.987 1.937Q5 10.875 5 12q0 1.125.338 2.162.337 1.038.987 1.938.275.35.725.375.45.025.8-.325ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2V6v12Zm0 0h16V6H4v12Z"/>
    </Icon>
  );
});

IconMaterialSurroundSound.displayName = 'AmauiIconMaterialSurroundSound';

export default IconMaterialSurroundSound;
