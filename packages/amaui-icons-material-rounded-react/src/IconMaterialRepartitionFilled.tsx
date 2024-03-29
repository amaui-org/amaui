import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRepartitionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RepartitionFilled'

      short_name='Repartition'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 14q-.425 0-.712-.288Q3 13.425 3 13t.288-.713Q3.575 12 4 12h13q.825 0 1.413-.588Q19 10.825 19 10t-.587-1.413Q17.825 8 17 8H5.825l.875.875q.15.15.225.337Q7 9.4 7 9.587q0 .188-.075.375-.075.188-.225.338-.3.3-.7.3-.4 0-.7-.3L2.7 7.7q-.3-.3-.3-.7 0-.4.3-.7l2.6-2.6q.3-.3.713-.3.412 0 .712.3.15.15.225.337.075.188.075.375 0 .188-.075.375-.075.188-.225.338l-.9.875H17q1.65 0 2.825 1.175Q21 8.35 21 10q0 1.65-1.175 2.825Q18.65 14 17 14Zm1 8q-.825 0-1.413-.587Q3 20.825 3 20v-2q0-.825.587-1.413Q4.175 16 5 16h14q.825 0 1.413.587Q21 17.175 21 18v2q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h3.325v-2H5Zm5.325 0h3.325v-2h-3.325Zm5.35 0H19v-2h-3.325Z"/>
    </Icon>
  );
});

IconMaterialRepartitionFilled.displayName = 'AmauiIconMaterialRepartitionFilled';

export default IconMaterialRepartitionFilled;
