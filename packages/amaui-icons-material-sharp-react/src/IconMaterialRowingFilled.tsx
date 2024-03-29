import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRowingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RowingFilled'

      short_name='Rowing'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.5 20.5 4 19l4.5-4.5L11 17H9ZM15 5q-.825 0-1.412-.588Q13 3.825 13 3t.588-1.413Q14.175 1 15 1t1.413.587Q17 2.175 17 3q0 .825-.587 1.412Q15.825 5 15 5Zm3 19-3-3v-1.5l-7.1-7.1q-.225.05-.45.075-.225.025-.45.025v-2.2q1.25.05 2.55-.538 1.3-.587 2.1-1.462l1.4-1.55q.275-.3.775-.525.5-.225.925-.225.95 0 1.6.65.65.65.65 1.6V14q0 .65-.237 1.188-.238.537-.663.962l-3.6-3.55v-2.3q-.5.425-1.075.775-.575.35-1.225.625l6.3 6.3H18l3 3Z"/>
    </Icon>
  );
});

IconMaterialRowingFilled.displayName = 'AmauiIconMaterialRowingFilled';

export default IconMaterialRowingFilled;
