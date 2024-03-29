import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermMediaFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMediaFilled'

      short_name='PermMedia'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-.825 0-1.412-.587Q5 15.825 5 15V4q0-.825.588-1.413Q6.175 2 7 2h4.175q.4 0 .763.15.362.15.637.425L14 4h7q.825 0 1.413.588Q23 5.175 23 6v9q0 .825-.587 1.413Q21.825 17 21 17Zm-4 4q-.825 0-1.412-.587Q1 19.825 1 19V7q0-.425.288-.713Q1.575 6 2 6t.713.287Q3 6.575 3 7v12h16q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 21 19 21Zm7.025-8h7.95q.325 0 .463-.275.137-.275-.063-.525L15.95 9.025q-.15-.2-.4-.2t-.4.2l-1.9 2.475L12.1 10q-.15-.2-.4-.2t-.4.2l-1.675 2.2q-.2.25-.063.525.138.275.463.275Z"/>
    </Icon>
  );
});

IconMaterialPermMediaFilled.displayName = 'AmauiIconMaterialPermMediaFilled';

export default IconMaterialPermMediaFilled;
