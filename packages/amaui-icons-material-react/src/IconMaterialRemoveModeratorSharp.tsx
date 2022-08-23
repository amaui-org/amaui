import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveModeratorSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveModeratorSharp'
      short_name='RemoveModerator'

      {...props}
    >
      <path d="M18.85 16.05 17.35 14.5Q17.65 13.7 17.825 12.837Q18 11.975 18 11.1V6.375L12 4.125L8.35 5.5L6.8 3.95L12 2L20 5V11.1Q20 12.375 19.712 13.625Q19.425 14.875 18.85 16.05ZM19.8 22.6 16.55 19.35Q15.6 20.325 14.438 20.987Q13.275 21.65 12 22Q8.525 21.125 6.263 18.012Q4 14.9 4 11.1V6.8L1.4 4.2L2.8 2.8L21.2 21.2ZM10.575 13.375Q10.575 13.375 10.575 13.375Q10.575 13.375 10.575 13.375Q10.575 13.375 10.575 13.375Q10.575 13.375 10.575 13.375ZM12.85 10Q12.85 10 12.85 10Q12.85 10 12.85 10ZM12 19.9Q12.875 19.625 13.675 19.125Q14.475 18.625 15.15 17.95L6 8.8V11.1Q6 14.125 7.7 16.6Q9.4 19.075 12 19.9Z"/>
    </Icon>
  );
});

IconMaterialRemoveModeratorSharp.displayName = 'AmauiIconMaterialRemoveModeratorSharp';

export default IconMaterialRemoveModeratorSharp;
