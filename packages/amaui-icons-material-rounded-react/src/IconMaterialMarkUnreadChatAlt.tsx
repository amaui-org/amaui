import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkUnreadChatAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkUnreadChatAlt'

      short_name='MarkUnreadChatAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m6 18-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h10.1q-.1.5-.1 1t.1 1H4v12h16V7.9q.575-.125 1.075-.338.5-.212.925-.562v9q0 .825-.587 1.413Q20.825 18 20 18Zm7-4q.425 0 .713-.288Q14 13.425 14 13t-.287-.713Q13.425 12 13 12H7q-.425 0-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm4-3q.425 0 .712-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9H7q-.425 0-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm-2-5H7q-.425 0-.713.287Q6 6.575 6 7t.287.713Q6.575 8 7 8h11v-.1q-.925-.2-1.688-.688Q15.55 6.725 15 6ZM4 4v12V4Zm15 2q-1.25 0-2.125-.875T16 3q0-1.25.875-2.125T19 0q1.25 0 2.125.875T22 3q0 1.25-.875 2.125T19 6Z"/>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAlt.displayName = 'AmauiIconMaterialMarkUnreadChatAlt';

export default IconMaterialMarkUnreadChatAlt;
