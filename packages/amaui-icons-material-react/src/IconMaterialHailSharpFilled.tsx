import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHailSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HailSharpFilled'
      short_name='Hail'

      {...props}
    >
      <path d="M12 6Q11.175 6 10.588 5.412Q10 4.825 10 4Q10 3.175 10.588 2.587Q11.175 2 12 2Q12.825 2 13.413 2.587Q14 3.175 14 4Q14 4.825 13.413 5.412Q12.825 6 12 6ZM9 22V10.1Q7.75 10.525 7.375 11.662Q7 12.8 7 14H5Q5 10.8 6.875 8.9Q8.75 7 12 7Q14.5 7 15.75 5.762Q17 4.525 17 2H19Q19 4.2 18.062 5.938Q17.125 7.675 15 8.4V22H13V16H11V22ZM4 22V16H7V22Z"/>
    </Icon>
  );
});

IconMaterialHailSharpFilled.displayName = 'AmauiIconMaterialHailSharpFilled';

export default IconMaterialHailSharpFilled;
