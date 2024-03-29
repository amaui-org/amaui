import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSceneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SceneFilled'

      short_name='Scene'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 22V7q0-.825-.587-1.412Q18.825 5 18 5h-1v1.3q0 .3-.2.5t-.5.2h-5.6q-.35 0-.562-.375-.213-.375-.038-.725L12 1.8q.175-.375.513-.588Q12.85 1 13.3 1h2.3q.6 0 1 .45T17 2.5V3h1q1.65 0 2.825 1.175Q22 5.35 22 7v15ZM5 22q-1.275 0-2.138-.863Q2 20.275 2 19v-2.5q0-.625.438-1.062Q2.875 15 3.5 15t1.062.438Q5 15.875 5 16.5V19h10v-2.5q0-.625.438-1.062Q15.875 15 16.5 15t1.062.438Q18 15.875 18 16.5V19q0 1.275-.862 2.137Q16.275 22 15 22Zm1-4v-1.5q0-.8-.525-1.525Q4.95 14.25 4 14.05V12q0-.825.588-1.413Q5.175 10 6 10h8q.825 0 1.413.587Q16 11.175 16 12v2.05q-.95.2-1.475.925Q14 15.7 14 16.5V18Z"/>
    </Icon>
  );
});

IconMaterialSceneFilled.displayName = 'AmauiIconMaterialSceneFilled';

export default IconMaterialSceneFilled;
