import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoCrashSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoCrashSharpW100Filled'
      short_name='NoCrash'

      {...props}
    >
      <path d="M12 5.425 10.1 3.55 10.575 3.05 12 4.475 15.55 0.925 16.025 1.4ZM4.3 22.7V15.2L6.375 9.3H17.625L19.7 15.2V22.7H19V20.7H5V22.7ZM5.3 14.5H18.7L17.1 10H6.9ZM7.4 18.6Q7.825 18.6 8.113 18.312Q8.4 18.025 8.4 17.6Q8.4 17.175 8.113 16.888Q7.825 16.6 7.4 16.6Q6.975 16.6 6.688 16.888Q6.4 17.175 6.4 17.6Q6.4 18.025 6.688 18.312Q6.975 18.6 7.4 18.6ZM16.6 18.6Q17.025 18.6 17.312 18.312Q17.6 18.025 17.6 17.6Q17.6 17.175 17.312 16.888Q17.025 16.6 16.6 16.6Q16.175 16.6 15.888 16.888Q15.6 17.175 15.6 17.6Q15.6 18.025 15.888 18.312Q16.175 18.6 16.6 18.6Z"/>
    </Icon>
  );
});

IconMaterialNoCrashSharpW100Filled.displayName = 'AmauiIconMaterialNoCrashSharpW100Filled';

export default IconMaterialNoCrashSharpW100Filled;
