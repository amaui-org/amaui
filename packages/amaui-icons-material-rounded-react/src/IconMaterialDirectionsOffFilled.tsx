import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDirectionsOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOffFilled'

      short_name='DirectionsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.775 22.575 16 18.8l-2.6 2.6q-.3.3-.662.45-.363.15-.738.15t-.738-.15q-.362-.15-.662-.45l-8-8q-.3-.3-.45-.662Q2 12.375 2 12t.15-.738q.15-.362.45-.662l4.025-4.025L12.25 12.2l-.025 2.85L1.375 4.2q-.3-.3-.288-.713.013-.412.313-.712t.713-.3q.412 0 .712.3l18.375 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3ZM9 15q.425 0 .713-.288Q10 14.425 10 14v-2h2.025l-2-2H9q-.425 0-.712.287Q8 10.575 8 11v3q0 .425.288.712Q8.575 15 9 15Zm9.85.95-3.4-3.4.85-.85q.3-.3.3-.7 0-.4-.3-.7l-2.1-2.1q-.2-.2-.45-.087-.25.112-.25.387V10h-.6L8.05 5.15 10.6 2.6q.3-.3.662-.45Q11.625 2 12 2t.738.15q.362.15.662.45l8 8q.3.3.45.662.15.363.15.738t-.15.738q-.15.362-.45.662Z"/>
    </Icon>
  );
});

IconMaterialDirectionsOffFilled.displayName = 'AmauiIconMaterialDirectionsOffFilled';

export default IconMaterialDirectionsOffFilled;
