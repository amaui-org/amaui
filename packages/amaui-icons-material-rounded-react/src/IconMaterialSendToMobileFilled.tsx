import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSendToMobileFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendToMobileFilled'

      short_name='SendToMobile'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.3 15.3q-.275-.275-.287-.687-.013-.413.262-.713l.875-.9H13q-.425 0-.712-.288Q12 12.425 12 12t.288-.713Q12.575 11 13 11h4.15l-.875-.9Q16 9.825 16 9.412q0-.412.3-.712.275-.275.7-.275.425 0 .7.275l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.687.287-.413.013-.713-.287ZM7 23q-.825 0-1.412-.587Q5 21.825 5 21V3q0-.825.588-1.413Q6.175 1 7 1h10q.825 0 1.413.587Q19 2.175 19 3v4h-2V6H7v12h10v-1h2v4q0 .825-.587 1.413Q17.825 23 17 23Z"/>
    </Icon>
  );
});

IconMaterialSendToMobileFilled.displayName = 'AmauiIconMaterialSendToMobileFilled';

export default IconMaterialSendToMobileFilled;
