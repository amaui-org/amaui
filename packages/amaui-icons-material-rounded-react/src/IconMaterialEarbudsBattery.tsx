import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEarbudsBattery = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsBattery'

      short_name='EarbudsBattery'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 18q-.425 0-.712-.288Q16 17.425 16 17V8q0-.425.288-.713Q16.575 7 17 7h1v-.5q0-.2.15-.35.15-.15.35-.15h1q.2 0 .35.15.15.15.15.35V7h1q.425 0 .712.287Q22 7.575 22 8v9q0 .425-.288.712Q21.425 18 21 18Zm1-2h2-2ZM5.375 18q-1.425 0-2.4-.975Q2 16.05 2 14.625V8q0-.825.588-1.412Q3.175 6 4 6t1.412.588Q6 7.175 6 8t-.588 1.412Q4.825 10 4 10q-.125 0-.25-.025T3.5 9.9v4.725q0 .8.537 1.337.538.538 1.338.538t1.338-.538q.537-.537.537-1.337v-5.25q0-1.425.975-2.4Q9.2 6 10.625 6q1.425 0 2.4.975.975.975.975 2.4V16q0 .825-.587 1.413Q12.825 18 12 18q-.825 0-1.412-.587Q10 16.825 10 16q0-.825.588-1.413Q11.175 14 12 14q.125 0 .25.025t.25.075V9.375q0-.8-.537-1.338-.538-.537-1.338-.537t-1.337.537q-.538.538-.538 1.338v5.25q0 1.425-.975 2.4Q6.8 18 5.375 18ZM18 16h2V9h-2Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBattery.displayName = 'AmauiIconMaterialEarbudsBattery';

export default IconMaterialEarbudsBattery;
