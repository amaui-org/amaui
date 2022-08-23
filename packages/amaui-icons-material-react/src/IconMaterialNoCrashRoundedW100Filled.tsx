import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNoCrashRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoCrashRoundedW100Filled'
      short_name='NoCrash'

      {...props}
    >
      <path d="M12 4.475 15.3 1.15Q15.4 1.05 15.55 1.05Q15.7 1.05 15.8 1.15Q15.9 1.25 15.9 1.4Q15.9 1.55 15.8 1.65L12.525 4.9Q12.3 5.125 12 5.125Q11.7 5.125 11.475 4.9L10.325 3.775Q10.225 3.675 10.225 3.537Q10.225 3.4 10.325 3.3Q10.425 3.2 10.575 3.2Q10.725 3.2 10.825 3.3ZM5 20.7V22.35Q5 22.5 4.9 22.6Q4.8 22.7 4.65 22.7Q4.5 22.7 4.4 22.6Q4.3 22.5 4.3 22.35V15.2L6.25 9.65Q6.3 9.475 6.45 9.387Q6.6 9.3 6.8 9.3H17.3Q17.45 9.3 17.575 9.4Q17.7 9.5 17.75 9.65L19.7 15.2V22.35Q19.7 22.5 19.6 22.6Q19.5 22.7 19.35 22.7Q19.2 22.7 19.1 22.6Q19 22.5 19 22.35V20.7ZM5.3 14.5H18.7L17.1 10H6.9ZM7.4 18.6Q7.825 18.6 8.113 18.312Q8.4 18.025 8.4 17.6Q8.4 17.175 8.113 16.888Q7.825 16.6 7.4 16.6Q6.975 16.6 6.688 16.888Q6.4 17.175 6.4 17.6Q6.4 18.025 6.688 18.312Q6.975 18.6 7.4 18.6ZM16.6 18.6Q17.025 18.6 17.312 18.312Q17.6 18.025 17.6 17.6Q17.6 17.175 17.312 16.888Q17.025 16.6 16.6 16.6Q16.175 16.6 15.888 16.888Q15.6 17.175 15.6 17.6Q15.6 18.025 15.888 18.312Q16.175 18.6 16.6 18.6Z"/>
    </Icon>
  );
});

IconMaterialNoCrashRoundedW100Filled.displayName = 'AmauiIconMaterialNoCrashRoundedW100Filled';

export default IconMaterialNoCrashRoundedW100Filled;
