import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffSharpW100Filled'
      short_name='LocationOff'

      {...props}
    >
      <path d="M20.7 21.7 14.75 15.8Q14.175 16.45 13.538 17.312Q12.9 18.175 12.5 18.95Q12.425 19.1 12.3 19.2Q12.175 19.3 12 19.3Q11.825 19.3 11.7 19.2Q11.575 19.1 11.5 18.95Q10.95 17.95 10.113 16.863Q9.275 15.775 8.55 14.9Q7.075 13.05 6.562 11.862Q6.05 10.675 6.05 9.25Q6.05 8.825 6.125 8.275Q6.2 7.725 6.35 7.35L2.3 3.3L2.8 2.8L21.2 21.2ZM16.45 13.55 13.525 10.525Q13.7 10.35 13.85 10.012Q14 9.675 14 9.25Q14 8.4 13.425 7.825Q12.85 7.25 12 7.25Q11.575 7.25 11.263 7.362Q10.95 7.475 10.75 7.65L7.9 4.95Q8.775 4.125 9.788 3.712Q10.8 3.3 12 3.3Q14.525 3.3 16.238 5.087Q17.95 6.875 17.95 9.25Q17.95 10.6 17.6 11.562Q17.25 12.525 16.45 13.55Z"/>
    </Icon>
  );
});

IconMaterialLocationOffSharpW100Filled.displayName = 'AmauiIconMaterialLocationOffSharpW100Filled';

export default IconMaterialLocationOffSharpW100Filled;
