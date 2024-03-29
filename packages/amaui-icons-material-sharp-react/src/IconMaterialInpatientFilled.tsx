import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInpatientFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InpatientFilled'

      short_name='Inpatient'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.5 15.5 16 12l3.5-3.5 1.4 1.4-1.075 1.1H23v2h-3.175l1.075 1.1ZM2 22V2h13v20Zm2-11.475q.45-.275.95-.4Q5.45 10 6 10h5q.55 0 1.05.125t.95.4V4H4ZM8.5 9q-.825 0-1.412-.588Q6.5 7.825 6.5 7t.588-1.412Q7.675 5 8.5 5t1.413.588Q10.5 6.175 10.5 7t-.587 1.412Q9.325 9 8.5 9Zm-1 10h2v-2h2v-2h-2v-2h-2v2h-2v2h2Z"/>
    </Icon>
  );
});

IconMaterialInpatientFilled.displayName = 'AmauiIconMaterialInpatientFilled';

export default IconMaterialInpatientFilled;
