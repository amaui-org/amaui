import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsFilled'

      short_name='Curtains'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.225 12q1.7 1.125 2.625 3.075.925 1.95 1.1 3.925h.1q.175-1.975 1.1-3.925.925-1.95 2.625-3.075-1.7-1.125-2.625-3.075-.925-1.95-1.1-3.925h-.1q-.175 1.975-1.1 3.925-.925 1.95-2.625 3.075ZM3 21q-.425 0-.712-.288Q2 20.425 2 20t.288-.712Q2.575 19 3 19h1V5q0-.825.588-1.413Q5.175 3 6 3h12q.825 0 1.413.587Q20 4.175 20 5v14h1q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 21 21 21Z"/>
    </Icon>
  );
});

IconMaterialCurtainsFilled.displayName = 'AmauiIconMaterialCurtainsFilled';

export default IconMaterialCurtainsFilled;
