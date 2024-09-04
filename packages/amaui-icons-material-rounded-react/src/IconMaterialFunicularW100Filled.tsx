import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFunicularW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FunicularW100Filled'

      short_name='Funicular'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M110-97q-7 2-12.5-2.11-5.5-4.1-5.5-11.25 0-4.64 2.5-8.14Q97-122 102-124l203-56v-132H202q-12.75 0-21.37-8.63Q172-329.25 172-342v-378h-26q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h100v-10q0-12.75 8.63-21.38Q263.25-788 276-788h408q12.75 0 21.38 8.62Q714-770.75 714-758v10h100q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-26v308q0 12.75-8.62 21.37Q770.75-382 758-382H657v106l193-53q7-2 12.5 2.11 5.5 4.1 5.5 11.25 0 4.64-2.5 8.14-2.5 3.5-7.5 5.5L110-97Zm235-94 272-74v-117H494v40q0 12.75-8.62 21.37Q476.75-312 464-312H345v121ZM200-428h266v-292H200v292Zm294-70h266v-222H494v222Z"/>
    </Icon>
  );
});

IconMaterialFunicularW100Filled.displayName = 'AmauiIconMaterialFunicularW100Filled';

export default IconMaterialFunicularW100Filled;
