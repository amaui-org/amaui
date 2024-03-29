import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFilterNone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FilterNone'

      short_name='FilterNone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 18q-.825 0-1.412-.587Q6 16.825 6 16V4q0-.825.588-1.413Q7.175 2 8 2h12q.825 0 1.413.587Q22 3.175 22 4v12q0 .825-.587 1.413Q20.825 18 20 18Zm0-2h12V4H8v12Zm-4 6q-.825 0-1.412-.587Q2 20.825 2 20V6.975q0-.425.288-.7Q2.575 6 3 6t.713.287Q4 6.575 4 7v13h13.025q.425 0 .7.288.275.287.275.712t-.288.712Q17.425 22 17 22ZM8 4v12V4Z"/>
    </Icon>
  );
});

IconMaterialFilterNone.displayName = 'AmauiIconMaterialFilterNone';

export default IconMaterialFilterNone;
