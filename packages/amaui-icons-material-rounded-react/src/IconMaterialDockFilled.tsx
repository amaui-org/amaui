import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockFilled'

      short_name='Dock'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 23q-.425 0-.712-.288Q8 22.425 8 22t.288-.712Q8.575 21 9 21h6q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 23 15 23Zm-1-4q-.825 0-1.412-.587Q6 17.825 6 17V3q0-.825.588-1.413Q7.175 1 8 1h8q.825 0 1.413.587Q18 2.175 18 3v14q0 .825-.587 1.413Q16.825 19 16 19Zm0-5h8V6H8Z"/>
    </Icon>
  );
});

IconMaterialDockFilled.displayName = 'AmauiIconMaterialDockFilled';

export default IconMaterialDockFilled;
