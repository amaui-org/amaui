import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardToInbox = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInbox'

      short_name='ForwardToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 6H4v12h9v2H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v7h-2Zm-.825 14H16q-.425 0-.712-.288Q15 19.425 15 19t.288-.712Q15.575 18 16 18h3.175l-.9-.9q-.3-.3-.287-.7.012-.4.312-.7.3-.275.7-.288.4-.012.7.288l2.6 2.6q.3.3.3.7 0 .4-.3.7l-2.6 2.6q-.275.275-.687.287-.413.013-.713-.287-.275-.275-.275-.7 0-.425.275-.7ZM4 6v12-5 .075V6Zm8 5 8-5v2l-7.475 4.675q-.25.15-.525.15t-.525-.15L4 8V6Z"/>
    </Icon>
  );
});

IconMaterialForwardToInbox.displayName = 'AmauiIconMaterialForwardToInbox';

export default IconMaterialForwardToInbox;
