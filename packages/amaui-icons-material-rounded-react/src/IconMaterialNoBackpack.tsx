import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoBackpack = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoBackpack'

      short_name='NoBackpack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 17.175-2-2V8q0-.825-.587-1.412Q16.825 6 16 6H8.825l-1.85-1.85H7V3.5q0-.625.438-1.062Q7.875 2 8.5 2t1.062.438Q10 2.875 10 3.5V4h4v-.5q0-.625.438-1.062Q14.875 2 15.5 2t1.062.438Q17 2.875 17 3.5v.65q1.3.35 2.15 1.4Q20 6.6 20 8Zm-3.5-3.5L14.825 12h.675q.425 0 .712.287.288.288.288.713Zm-2.95-2.95ZM19.775 22.6 1.4 4.225 2.8 2.8l18.375 18.4Zm-8.6-10.6v2H8.5q-.425 0-.712-.288Q7.5 13.425 7.5 13t.288-.713Q8.075 12 8.5 12Zm.375 2.375Zm-6.375-9.2 1.4 1.4q-.275.275-.425.637Q6 7.575 6 8v12h12v-1.975l2 2V20q0 .825-.587 1.413Q18.825 22 18 22H6q-.825 0-1.412-.587Q4 20.825 4 20V8q0-.825.312-1.55.313-.725.863-1.275Z"/>
    </Icon>
  );
});

IconMaterialNoBackpack.displayName = 'AmauiIconMaterialNoBackpack';

export default IconMaterialNoBackpack;
