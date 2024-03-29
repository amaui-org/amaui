import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommentsDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommentsDisabled'

      short_name='CommentsDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.2 22.575q-.3.3-.712.3-.413 0-.713-.3L15.175 18H4q-.825 0-1.412-.587Q2 16.825 2 16V4.825L1.375 4.2q-.3-.3-.288-.7.013-.4.313-.7.3-.3.713-.3.412 0 .712.3L21.2 21.175q.3.3.3.7 0 .4-.3.7Zm.8-3.45L18.875 16H20V4H6.875l-2-2H20q.825 0 1.413.587Q22 3.175 22 4ZM4 16h9.175l-2-2H7q-.425 0-.713-.288Q6 13.425 6 13t.287-.713Q6.575 12 7 12h2.175l-1-1H7q-.425 0-.713-.288Q6 10.425 6 10q0-.225.113-.438.112-.212.287-.362L4 6.825V16Zm12.875-2-2-2H17q.425 0 .712.287.288.288.288.713t-.288.712Q17.425 14 17 14Zm-3-3-2-2H17q.425 0 .712.287Q18 9.575 18 10t-.288.712Q17.425 11 17 11Zm-3-3-2-2H17q.425 0 .712.287Q18 6.575 18 7t-.288.713Q17.425 8 17 8ZM8.6 11.4Zm4.275-1.4Z"/>
    </Icon>
  );
});

IconMaterialCommentsDisabled.displayName = 'AmauiIconMaterialCommentsDisabled';

export default IconMaterialCommentsDisabled;
