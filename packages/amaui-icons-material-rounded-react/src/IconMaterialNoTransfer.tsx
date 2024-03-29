import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoTransfer = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransfer'

      short_name='NoTransfer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.6 16.2 19.025h2.85v.4q0 .65-.425 1.113-.425.462-1.05.462-.65 0-1.113-.462Q16 20.075 16 19.425V19H8v.5q0 .625-.438 1.062Q7.125 21 6.5 21t-1.062-.438Q5 20.125 5 19.5v-1.55q-.45-.5-.725-1.113Q4 16.225 4 15.5V6.825L1.375 4.2q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.288.713-.013.412-.313.712t-.7.3q-.4 0-.7-.3ZM8 17h6.175l-5-5H6v3q0 .825.588 1.413Q7.175 17 8 17Zm11.725-.15L18 15.125V12h-3.125l-2-2H18V7H9.875l-2-2h9.775q-.375-.425-1.612-.713Q14.8 4 12.05 4q-1.775 0-2.887.15-1.113.15-1.763.375L5.875 3q.975-.5 2.488-.75Q9.875 2 12 2q4.3 0 6.15.925Q20 3.85 20 6v9.5q0 .35-.075.688-.075.337-.2.662ZM8.5 16q.625 0 1.062-.438Q10 15.125 10 14.5t-.438-1.062Q9.125 13 8.5 13t-1.062.438Q7 13.875 7 14.5t.438 1.062Q7.875 16 8.5 16ZM6 10h1.175L6 8.825Zm1.875-5h9.775Zm1.3 7Zm5.7 0H18Z"/>
    </Icon>
  );
});

IconMaterialNoTransfer.displayName = 'AmauiIconMaterialNoTransfer';

export default IconMaterialNoTransfer;
