import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveModeratorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModeratorSharpFilled'
      short_name='RemoveModerator'

      {...props}
    >
      <path d="M18.85 16.05 6.8 3.95 12 2 20 5V11.1Q20 12.375 19.712 13.625Q19.425 14.875 18.85 16.05ZM19.8 22.6 16.55 19.35Q15.6 20.325 14.438 20.987Q13.275 21.65 12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V6.8L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

IconMaterialRemoveModeratorSharpFilled.displayName = 'AmauiIconMaterialRemoveModeratorSharpFilled';

export default IconMaterialRemoveModeratorSharpFilled;
