import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCallToAction = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallToAction'

      short_name='CallToAction'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17h10q.425 0 .712-.288Q18 16.425 18 16v-1q0-.425-.288-.713Q17.425 14 17 14H7q-.425 0-.713.287Q6 14.575 6 15v1q0 .425.287.712Q6.575 17 7 17Zm-3 3q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Zm0-2V6v12Zm0 0h16V6H4v12Z"/>
    </Icon>
  );
});

IconMaterialCallToAction.displayName = 'AmauiIconMaterialCallToAction';

export default IconMaterialCallToAction;
