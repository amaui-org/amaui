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
      <path d="M4.75 19.75q-.325-.325-.325-.75t.325-.75L8.5 14.5 11 17H9l-2.75 2.75q-.325.325-.75.325t-.75-.325ZM15 5q-.825 0-1.412-.588Q13 3.825 13 3t.588-1.413Q14.175 1 15 1t1.413.587Q17 2.175 17 3q0 .825-.587 1.412Q15.825 5 15 5Zm1.1 11.15-3.6-3.55v-2.3q-.5.425-1.075.775-.575.35-1.225.625l6.3 6.3h1.075q.2 0 .388.075.187.075.337.225l2 2q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-1.6 1.6q-.15.15-.325.212-.175.063-.375.063t-.375-.063q-.175-.062-.325-.212l-2-2q-.15-.15-.225-.338-.075-.187-.075-.387V19.5l-7.1-7.1q-.225.05-.45.075-.225.025-.45.025-.45 0-.762-.325-.313-.325-.313-.775t.313-.775Q6.55 10.3 7 10.3q1.25 0 2.55-.563 1.3-.562 2.1-1.437l1.4-1.55q.275-.3.775-.525.5-.225.925-.225.95 0 1.6.65.65.65.65 1.6V14q0 .65-.237 1.188-.238.537-.663.962Z"/>
    </Icon>
  );
});

IconMaterialRowingFilled.displayName = 'AmauiIconMaterialRowingFilled';

export default IconMaterialRowingFilled;
