import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialForwardToInboxFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForwardToInboxFilled'

      short_name='ForwardToInbox'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v7.8q-.675-.4-1.438-.6Q19.8 13 19 13q-2.5 0-4.25 1.75T13 19v1Zm8-9L5.3 6.8q-.475-.275-.888-.013Q4 7.05 4 7.525q0 .25.1.425t.3.3l7.075 4.425q.25.15.525.15t.525-.15L19.6 8.25q.2-.125.3-.3.1-.175.1-.425 0-.45-.4-.725-.4-.275-.9 0Zm7.175 9H16q-.425 0-.712-.288Q15 19.425 15 19t.288-.712Q15.575 18 16 18h3.175l-.9-.9q-.3-.3-.287-.7.012-.4.312-.7.3-.275.7-.288.4-.012.7.288l2.6 2.6q.3.3.3.7 0 .4-.3.7l-2.6 2.6q-.275.275-.687.287-.413.013-.713-.287-.275-.275-.275-.7 0-.425.275-.7Z"/>
    </Icon>
  );
});

IconMaterialForwardToInboxFilled.displayName = 'AmauiIconMaterialForwardToInboxFilled';

export default IconMaterialForwardToInboxFilled;
