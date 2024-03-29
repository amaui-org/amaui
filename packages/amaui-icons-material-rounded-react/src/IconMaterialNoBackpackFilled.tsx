import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoBackpackFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpackFilled'

      short_name='NoBackpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.5 13.675 3.5 3.5V8q0-1.4-.85-2.45Q18.3 4.5 17 4.15V3.5q0-.625-.438-1.062Q16.125 2 15.5 2t-1.062.438Q14 2.875 14 3.5V4h-4v-.5q0-.625-.438-1.062Q9.125 2 8.5 2t-1.062.438Q7 2.875 7 3.5v.65h-.025l7.85 7.85h.675q.425 0 .712.287.288.288.288.713ZM9.175 12H8.5q-.425 0-.712.287-.288.288-.288.713t.288.712Q8.075 14 8.5 14h2.675Zm10.6 10.6-3.2-3.2h2.8l.625.625V20q0 .825-.587 1.413Q18.825 22 18 22H6q-.825 0-1.412-.587Q4 20.825 4 20V8q0-.825.312-1.55.313-.725.863-1.275l.975.975v2.825L1.4 4.225 2.8 2.8l18.375 18.4Z"/>
    </Icon>
  );
});

IconMaterialNoBackpackFilled.displayName = 'AmauiIconMaterialNoBackpackFilled';

export default IconMaterialNoBackpackFilled;
