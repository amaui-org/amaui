import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightSightAutoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoFilled'

      short_name='NightSightAuto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19q1.35 0 2.513-.538 1.162-.537 1.987-1.487-3.15-.2-5.325-2.488Q8 12.2 8 9q0-.325.025-.638.025-.312.075-.612-1.4.775-2.25 2.162Q5 11.3 5 13q0 2.5 1.75 4.25T11 19Zm0 2q-3.35 0-5.675-2.325Q3 16.35 3 13q0-3.35 2.325-5.675Q7.65 5 11 5q.125 0 .25.012.125.013.25.013-.725.8-1.113 1.812Q10 7.85 10 9q0 2.5 1.75 4.25T16 15q.8 0 1.525-.2.725-.2 1.375-.55-.45 2.875-2.662 4.812Q14.025 21 11 21Zm2.8-10L17 2h2l3.2 9h-1.9l-.7-2h-3.2l-.7 2Zm3.05-3.35h2.3L18 4Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoFilled.displayName = 'AmauiIconMaterialNightSightAutoFilled';

export default IconMaterialNightSightAutoFilled;
