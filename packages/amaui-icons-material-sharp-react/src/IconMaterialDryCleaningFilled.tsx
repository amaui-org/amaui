import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDryCleaningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningFilled'

      short_name='DryCleaning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22v-6H3v-4l8-3.55V7.8q-.875-.3-1.438-1.063Q9 5.975 9 5q0-1.275.863-2.138Q10.725 2 12 2q1.25 0 2.125.875T15 5h-2q0-.425-.287-.713Q12.425 4 12 4t-.712.287Q11 4.575 11 5t.288.713Q11.575 6 12 6h1v2.45L21 12v4h-4v6Zm-2-8h2v-1h10v1h2v-.7l-7-3.1-7 3.1Z"/>
    </Icon>
  );
});

IconMaterialDryCleaningFilled.displayName = 'AmauiIconMaterialDryCleaningFilled';

export default IconMaterialDryCleaningFilled;
