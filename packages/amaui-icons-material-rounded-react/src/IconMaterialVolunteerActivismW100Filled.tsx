import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVolunteerActivismW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VolunteerActivismW100Filled'

      short_name='VolunteerActivism'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.35 19.2v-5.7q0-.35.225-.575.225-.225.575-.225h1.1q.35 0 .575.225.225.225.225.575v5.7q0 .35-.225.575Q4.6 20 4.25 20h-1.1q-.35 0-.575-.225-.225-.225-.225-.575Zm10.75 1.725L5.75 18.75V12.7h2.225q.15 0 .275.025.125.025.25.075l5.75 2.1q.425.15.763.6.337.45.337.85 0 .225-.112.338-.113.112-.338.112h-.775q-.7 0-1.313-.088-.612-.087-1.112-.262l-1.525-.525q-.15-.05-.288.013-.137.062-.187.187-.05.15.025.3.075.15.225.2l1.6.525q.575.2 1.225.275.65.075 1.275.075h4.65q.675 0 1.112.4.438.4.438 1.05l-6.275 1.975q-.175.05-.437.05-.263 0-.438-.05Zm2.5-9.325q-.125 0-.225-.038-.1-.037-.2-.112-2.05-1.725-3.363-3.275Q10.5 6.625 10.5 5.35q0-1.025.713-1.738.712-.712 1.737-.712.675 0 1.362.387Q15 3.675 15.6 4.5q.6-.825 1.287-1.213.688-.387 1.363-.387 1.025 0 1.738.712.712.713.712 1.738 0 1.275-1.312 2.825-1.313 1.55-3.363 3.275-.075.075-.187.112-.113.038-.238.038Z"/>
    </Icon>
  );
});

IconMaterialVolunteerActivismW100Filled.displayName = 'AmauiIconMaterialVolunteerActivismW100Filled';

export default IconMaterialVolunteerActivismW100Filled;
