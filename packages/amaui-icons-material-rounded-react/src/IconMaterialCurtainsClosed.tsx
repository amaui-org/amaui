import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurtainsClosed = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsClosed'

      short_name='CurtainsClosed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 19h3V5H6Zm5 0h2V5h-2Zm4 0h3V5h-3Zm-9 0V5v14Zm12 0V5v14ZM3 21q-.425 0-.712-.288Q2 20.425 2 20t.288-.712Q2.575 19 3 19h1V5q0-.825.588-1.413Q5.175 3 6 3h12q.825 0 1.413.587Q20 4.175 20 5v14h1q.425 0 .712.288.288.287.288.712t-.288.712Q21.425 21 21 21Z"/>
    </Icon>
  );
});

IconMaterialCurtainsClosed.displayName = 'AmauiIconMaterialCurtainsClosed';

export default IconMaterialCurtainsClosed;
