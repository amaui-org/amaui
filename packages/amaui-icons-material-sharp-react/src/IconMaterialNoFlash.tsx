import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoFlash = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoFlash'

      short_name='NoFlash'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20.475 23.3-2.5-2.5V22H2V9.4h4.15l.2-.225L.675 3.5 2.1 2.075l19.8 19.8ZM4 20h12v-1.175l-2.575-2.575q-.275 1.2-1.212 1.975Q11.275 19 10 19q-1.45 0-2.475-1.025Q6.5 16.95 6.5 15.5q0-1.275.775-2.213.775-.937 1.975-1.212l-.675-.675H4Zm14-4.875-2-2V11.4h-1.725l-3.4-3.4h1.7l1.275 1.4H18ZM19 11V7h-1V2h4l-1.6 3.6H22Zm-3 2.125ZM12.3 15.1ZM10 17q.625 0 1.062-.438.438-.437.438-1.062t-.438-1.062Q10.625 14 10 14t-1.062.438Q8.5 14.875 8.5 15.5t.438 1.062Q9.375 17 10 17Z"/>
    </Icon>
  );
});

IconMaterialNoFlash.displayName = 'AmauiIconMaterialNoFlash';

export default IconMaterialNoFlash;
