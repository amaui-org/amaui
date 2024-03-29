import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermMedia = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermMedia'

      short_name='PermMedia'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-.825 0-1.412-.587Q5 15.825 5 15V4q0-.825.588-1.413Q6.175 2 7 2h4.175q.4 0 .763.15.362.15.637.425L14 4h7q.825 0 1.413.588Q23 5.175 23 6v9q0 .825-.587 1.413Q21.825 17 21 17Zm0-2h14V6h-7.825l-2-2H7v11Zm-4 6q-.825 0-1.412-.587Q1 19.825 1 19V7q0-.425.288-.713Q1.575 6 2 6t.713.287Q3 6.575 3 7v12h16q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 21 19 21Zm7-8h8q.3 0 .45-.275.15-.275-.05-.525l-2.375-3.175q-.15-.2-.4-.2t-.4.2L13 12l-1.225-1.65q-.15-.2-.4-.2t-.4.2L9.6 12.2q-.2.25-.05.525Q9.7 13 10 13Zm-3 2V4v11Z"/>
    </Icon>
  );
});

IconMaterialPermMedia.displayName = 'AmauiIconMaterialPermMedia';

export default IconMaterialPermMedia;
