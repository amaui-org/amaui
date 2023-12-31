import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook2W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book2W100Filled'

      short_name='Book2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M306-132q-38.943 0-66.471-27.529Q212-187.057 212-226v-488q0-48 33-81t81-33h362q24.75 0 42.375 17.625T748-768v461q0 5.714-4 10.357-4 4.643-9 5.643-23 5-38 23.14-15 18.139-15 41.86 0 22.795 14.5 40.898Q711-167 734-161q7 2 10.5 6.136 3.5 4.137 3.5 8.864 0 5.805-4.025 9.902Q739.95-132 734-132H306Zm48.035-188q5.965 0 9.965-4.025t4-9.975v-452q0-5.95-4.035-9.975-4.035-4.025-10-4.025T344-795.975q-4 4.025-4 9.975v452q0 5.95 4.035 9.975 4.035 4.025 10 4.025ZM306-160h375q-13-13-20-29.707-7-16.706-7-36.293 0-19 7-36t20-30H306q-28 0-47 19.25T240-226q0 28 19 47t47 19Z"/>
    </Icon>
  );
});

IconMaterialBook2W100Filled.displayName = 'AmauiIconMaterialBook2W100Filled';

export default IconMaterialBook2W100Filled;
