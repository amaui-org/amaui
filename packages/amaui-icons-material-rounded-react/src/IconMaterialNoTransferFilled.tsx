import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoTransferFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoTransferFilled'

      short_name='NoTransfer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.6 16.2 19.025h2.85v.4q0 .65-.425 1.113-.425.462-1.05.462-.65 0-1.113-.462Q16 20.075 16 19.425V19H8v.5q0 .625-.438 1.062Q7.125 21 6.5 21t-1.062-.438Q5 20.125 5 19.5v-1.55q-.45-.5-.725-1.113Q4 16.225 4 15.5V6.825L1.375 4.2q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.288.713-.013.412-.313.712t-.7.3q-.4 0-.7-.3Zm-.05-5.75L12.875 10H18V7H9.875l-4-4q.975-.5 2.488-.75Q9.875 2 12 2q4.3 0 6.15.925Q20 3.85 20 6v9.5q0 .35-.075.688-.075.337-.2.662ZM8.5 16q.625 0 1.062-.438Q10 15.125 10 14.5t-.438-1.062Q9.125 13 8.5 13t-1.062.438Q7 13.875 7 14.5t.438 1.062Q7.875 16 8.5 16ZM6 10h1.175L6 8.825Z"/>
    </Icon>
  );
});

IconMaterialNoTransferFilled.displayName = 'AmauiIconMaterialNoTransferFilled';

export default IconMaterialNoTransferFilled;
