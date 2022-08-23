import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEditLocationAltSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditLocationAltSharpFilled'
      short_name='EditLocationAlt'

      {...props}
    >
      <path d="M11 11V8.9L17.2 2.7L19.3 4.8L13.1 11ZM20 4.1 17.9 2 19.3 0.6 21.4 2.7ZM12 22Q7.975 18.575 5.988 15.637Q4 12.7 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q12.675 2 13.338 2.112Q14 2.225 14.625 2.425L9 8.075V13H13.95L19.55 7.4Q19.775 8.05 19.888 8.75Q20 9.45 20 10.2Q20 12.7 18.013 15.637Q16.025 18.575 12 22Z"/>
    </Icon>
  );
});

IconMaterialEditLocationAltSharpFilled.displayName = 'AmauiIconMaterialEditLocationAltSharpFilled';

export default IconMaterialEditLocationAltSharpFilled;
