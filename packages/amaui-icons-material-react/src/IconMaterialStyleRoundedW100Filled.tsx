import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialStyleRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='StyleRoundedW100Filled'
      short_name='Style'

      {...props}
    >
      <path d="M4.425 20.45Q3.625 20.1 3.35 19.3Q3.075 18.5 3.425 17.75L4.425 15.6ZM9.425 21.85Q8.6 21.85 8.012 21.263Q7.425 20.675 7.425 19.85V16.5L9.125 21.2Q9.2 21.4 9.275 21.55Q9.35 21.7 9.475 21.85ZM12.925 20.7Q12.65 20.825 12.375 20.663Q12.1 20.5 11.975 20.2L7.525 8Q7.4 7.725 7.55 7.45Q7.7 7.175 7.975 7.05L15.525 4.3Q15.8 4.175 16.05 4.337Q16.3 4.5 16.425 4.8L20.875 16.95Q21 17.25 20.888 17.538Q20.775 17.825 20.475 17.95ZM11.225 10Q11.65 10 11.938 9.712Q12.225 9.425 12.225 9Q12.225 8.575 11.938 8.287Q11.65 8 11.225 8Q10.8 8 10.513 8.287Q10.225 8.575 10.225 9Q10.225 9.425 10.513 9.712Q10.8 10 11.225 10Z"/>
    </Icon>
  );
});

IconMaterialStyleRoundedW100Filled.displayName = 'AmauiIconMaterialStyleRoundedW100Filled';

export default IconMaterialStyleRoundedW100Filled;
