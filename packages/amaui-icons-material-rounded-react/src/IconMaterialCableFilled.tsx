import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CableFilled'

      short_name='Cable'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.425 0-.713-.288Q4 20.425 4 20v-1h-.025q-.425 0-.7-.275Q3 18.45 3 18.025V15q0-.425.288-.713Q3.575 14 4 14h1V7q0-1.65 1.175-2.825Q7.35 3 9 3q1.65 0 2.825 1.175Q13 5.35 13 7v10q0 .825.588 1.413Q14.175 19 15 19t1.413-.587Q17 17.825 17 17v-7h-1q-.425 0-.712-.288Q15 9.425 15 9V5.975q0-.425.275-.7.275-.275.7-.275H16V4q0-.425.288-.713Q16.575 3 17 3h2q.425 0 .712.287Q20 3.575 20 4v1h.025q.425 0 .7.275.275.275.275.7V9q0 .425-.288.712Q20.425 10 20 10h-1v7q0 1.65-1.175 2.825Q16.65 21 15 21q-1.65 0-2.825-1.175Q11 18.65 11 17V7q0-.825-.587-1.412Q9.825 5 9 5q-.825 0-1.412.588Q7 6.175 7 7v7h1q.425 0 .713.287Q9 14.575 9 15v3.025q0 .425-.275.7-.275.275-.7.275H8v1q0 .425-.287.712Q7.425 21 7 21Z"/>
    </Icon>
  );
});

IconMaterialCableFilled.displayName = 'AmauiIconMaterialCableFilled';

export default IconMaterialCableFilled;
