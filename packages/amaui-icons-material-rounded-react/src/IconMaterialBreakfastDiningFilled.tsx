import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBreakfastDiningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BreakfastDiningFilled'

      short_name='BreakfastDining'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 21q-.825 0-1.412-.587Q4 19.825 4 19v-8.55q-.925-.55-1.462-1.463Q2 8.075 2 7q0-1.65 1.175-2.825Q4.35 3 6 3h12q1.65 0 2.825 1.175Q22 5.35 22 7q0 1.075-.538 1.987Q20.925 9.9 20 10.45V19q0 .825-.587 1.413Q18.825 21 18 21Zm5.3-4.3q.3.275.713.275.412 0 .687-.275l3-3q.3-.3.3-.713 0-.412-.3-.687l-3-3q-.275-.3-.687-.3-.413 0-.713.3l-3 3q-.275.275-.275.687 0 .413.275.713Zm.7-2.1L10.4 13l1.6-1.6 1.6 1.6Z"/>
    </Icon>
  );
});

IconMaterialBreakfastDiningFilled.displayName = 'AmauiIconMaterialBreakfastDiningFilled';

export default IconMaterialBreakfastDiningFilled;
