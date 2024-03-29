import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEditOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOffFilled'

      short_name='EditOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.1 21.875-6.375-6.35L7.55 20.7q-.15.15-.337.225-.188.075-.388.075H4q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387.075-.188.225-.338l5.175-5.175L2.1 4.9q-.275-.275-.275-.7 0-.425.3-.725.275-.275.7-.275.425 0 .725.275l16.975 17q.275.275.275.7 0 .425-.275.7-.3.3-.725.3t-.7-.3Zm.2-12.95-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387Zm-3.725 3.75-4.25-4.25L13.6 6.15l4.25 4.25Z"/>
    </Icon>
  );
});

IconMaterialEditOffFilled.displayName = 'AmauiIconMaterialEditOffFilled';

export default IconMaterialEditOffFilled;
