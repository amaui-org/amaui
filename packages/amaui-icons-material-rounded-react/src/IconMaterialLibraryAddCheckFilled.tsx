import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryAddCheckFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryAddCheckFilled'

      short_name='LibraryAddCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.7 11.2-1.45-1.425q-.3-.275-.7-.275-.4 0-.7.3-.275.275-.275.7 0 .425.275.7L12 13.35q.275.275.7.275.425 0 .7-.275l4.25-4.25q.3-.3.3-.713 0-.412-.3-.712t-.712-.3q-.413 0-.713.3ZM8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm-4 4q-.825 0-1.412-.587Q2 20.825 2 20V7q0-.425.288-.713Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13q.425 0 .712.288.288.287.288.712t-.288.712Q17.425 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialLibraryAddCheckFilled.displayName = 'AmauiIconMaterialLibraryAddCheckFilled';

export default IconMaterialLibraryAddCheckFilled;
