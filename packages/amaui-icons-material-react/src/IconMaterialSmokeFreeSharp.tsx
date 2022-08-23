import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSmokeFreeSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmokeFreeSharp'
      short_name='SmokeFree'

      {...props}
    >
      <path d="M18.85 16 18 15.15V13H19.5V16ZM17 14.15 15.85 13H17ZM20.5 16V13H22V16ZM19.8 22.6 13.2 16H2V13H10.2L1.4 4.2L2.8 2.8L21.2 21.2ZM18 12V10.7Q18 9.725 17.425 9.212Q16.85 8.7 16.05 8.7H14.5Q13.1 8.7 12.125 7.725Q11.15 6.75 11.15 5.35Q11.15 3.95 12.125 2.975Q13.1 2 14.5 2V3.5Q13.75 3.5 13.2 4.025Q12.65 4.55 12.65 5.35Q12.65 6.15 13.2 6.675Q13.75 7.2 14.5 7.2H16.05Q17.45 7.2 18.475 8.1Q19.5 9 19.5 10.35V12ZM20.5 12V9.75Q20.5 8.1 19.35 6.9Q18.2 5.7 16.5 5.7V4.2Q17.25 4.2 17.8 3.65Q18.35 3.1 18.35 2.35H19.85Q19.85 3.075 19.575 3.662Q19.3 4.25 18.85 4.75Q20.25 5.4 21.125 6.75Q22 8.1 22 9.75V12Z"/>
    </Icon>
  );
});

IconMaterialSmokeFreeSharp.displayName = 'AmauiIconMaterialSmokeFreeSharp';

export default IconMaterialSmokeFreeSharp;
