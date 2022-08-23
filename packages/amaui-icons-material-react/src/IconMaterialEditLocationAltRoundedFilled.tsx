import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditLocationAltRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltRoundedFilled'
      short_name='EditLocationAlt'

      {...props}
    >
      <path d="M11 11V8.9L17.2 2.7L19.3 4.8L13.1 11ZM20 4.1 17.9 2 18.6 1.3Q18.9 1 19.3 1Q19.7 1 20 1.3L20.7 2Q21 2.3 21 2.7Q21 3.1 20.7 3.4ZM12 21.625Q11.8 21.625 11.6 21.55Q11.4 21.475 11.25 21.35Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q12.675 2 13.338 2.112Q14 2.225 14.625 2.425L9.3 7.775Q9.15 7.925 9.075 8.113Q9 8.3 9 8.5V12Q9 12.425 9.288 12.712Q9.575 13 10 13H13.525Q13.725 13 13.913 12.925Q14.1 12.85 14.25 12.7L19.55 7.4Q19.775 8.05 19.888 8.75Q20 9.45 20 10.2Q20 12.6 18.2 15.363Q16.4 18.125 12.75 21.35Q12.6 21.475 12.4 21.55Q12.2 21.625 12 21.625Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltRoundedFilled.displayName = 'AmauiIconMaterialEditLocationAltRoundedFilled';

export default IconMaterialEditLocationAltRoundedFilled;
