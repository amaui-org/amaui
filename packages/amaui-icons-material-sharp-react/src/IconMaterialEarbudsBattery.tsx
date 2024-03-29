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
      <path d="M16 18V7h2V6h2v1h2v11Zm2-2h2-2ZM5.375 18q-1.425 0-2.4-.975Q2 16.05 2 14.625V6h4v4H3.5v4.625q0 .8.537 1.337.538.538 1.338.538t1.338-.538q.537-.537.537-1.337v-5.25q0-1.425.975-2.4Q9.2 6 10.625 6q1.425 0 2.4.975.975.975.975 2.4V18h-4v-4h2.5V9.375q0-.8-.537-1.338-.538-.537-1.338-.537t-1.337.537q-.538.538-.538 1.338v5.25q0 1.425-.975 2.4Q6.8 18 5.375 18ZM18 16h2V9h-2Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBattery.displayName = 'AmauiIconMaterialEarbudsBattery';

export default IconMaterialEarbudsBattery;
