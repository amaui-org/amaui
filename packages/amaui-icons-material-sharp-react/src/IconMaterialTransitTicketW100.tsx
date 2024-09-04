import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTransitTicketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitTicketW100'

      short_name='TransitTicket'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M384-324h192v-28l-32-16q26.4 0 45.2-18.8Q608-405.6 608-432v-144q0-35-29.54-49.5t-98.2-14.5Q414-640 383-624.5t-31 48.94v143.29Q352-406 370.8-387q18.8 19 45.2 19l-32 16v28Zm40-76q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm112 0q-10.4 0-17.2-6.8-6.8-6.8-6.8-17.2 0-10.4 6.8-17.2 6.8-6.8 17.2-6.8 10.4 0 17.2 6.8 6.8 6.8 6.8 17.2 0 10.4-6.8 17.2-6.8 6.8-17.2 6.8Zm-156-76v-100h200v100H380ZM132-212v-146q36-17 58-49.5t22-72.5q0-40-22-72.5T132-602v-146h696v146q-36 17-58 49.5T748-480q0 40 22 72.5t58 49.5v146H132Zm28-28h640v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102Zm320-240Z"/>
    </Icon>
  );
});

IconMaterialTransitTicketW100.displayName = 'AmauiIconMaterialTransitTicketW100';

export default IconMaterialTransitTicketW100;
