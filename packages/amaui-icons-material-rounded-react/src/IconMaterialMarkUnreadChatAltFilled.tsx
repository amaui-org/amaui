import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMarkUnreadChatAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkUnreadChatAltFilled'

      short_name='MarkUnreadChatAlt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13 14q.425 0 .713-.288Q14 13.425 14 13t-.287-.713Q13.425 12 13 12H7q-.425 0-.713.287Q6 12.575 6 13t.287.712Q6.575 14 7 14Zm4-3q.425 0 .712-.288Q18 10.425 18 10t-.288-.713Q17.425 9 17 9H7q-.425 0-.713.287Q6 9.575 6 10t.287.712Q6.575 11 7 11Zm2-5q-1.25 0-2.125-.875T16 3q0-1.25.875-2.125T19 0q1.25 0 2.125.875T22 3q0 1.25-.875 2.125T19 6ZM6 18l-2.3 2.3q-.475.475-1.088.212Q2 20.25 2 19.575V4q0-.825.588-1.413Q3.175 2 4 2h10.1q-.1.5-.1 1t.1 1q.125.575.35 1.075.225.5.55.925H7q-.425 0-.713.287Q6 6.575 6 7t.287.713Q6.575 8 7 8h12q.8 0 1.575-.25Q21.35 7.5 22 7v9q0 .825-.587 1.413Q20.825 18 20 18Z"/>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAltFilled.displayName = 'AmauiIconMaterialMarkUnreadChatAltFilled';

export default IconMaterialMarkUnreadChatAltFilled;
