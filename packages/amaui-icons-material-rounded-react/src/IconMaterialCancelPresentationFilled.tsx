import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCancelPresentationFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelPresentationFilled'

      short_name='CancelPresentation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.7 15.3q.275.275.7.275.425 0 .7-.275l1.9-1.9 1.925 1.925q.275.275.675.275t.7-.3q.275-.275.275-.7 0-.425-.275-.7L13.4 12l1.925-1.925Q15.6 9.8 15.6 9.4t-.3-.7q-.275-.275-.7-.275-.425 0-.7.275L12 10.6l-1.925-1.925Q9.8 8.4 9.4 8.4t-.7.3q-.275.275-.275.7 0 .425.275.7l1.9 1.9-1.925 1.925Q8.4 14.2 8.4 14.6t.3.7ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialCancelPresentationFilled.displayName = 'AmauiIconMaterialCancelPresentationFilled';

export default IconMaterialCancelPresentationFilled;
