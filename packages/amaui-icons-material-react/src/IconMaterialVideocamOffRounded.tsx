import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVideocamOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideocamOffRounded'
      short_name='VideocamOff'

      {...props}
    >
      <path d="M21.15 16.65 18 13.5V15.175L16 13.175V6Q16 6 16 6Q16 6 16 6H8.825L6.825 4H16Q16.825 4 17.413 4.588Q18 5.175 18 6V10.5L21.15 7.35Q21.4 7.1 21.7 7.225Q22 7.35 22 7.7V16.3Q22 16.65 21.7 16.775Q21.4 16.9 21.15 16.65ZM19.85 22.65 16.95 19.75Q16.725 19.875 16.5 19.938Q16.275 20 16 20H4Q3.175 20 2.588 19.413Q2 18.825 2 18V6Q2 5.725 2.062 5.5Q2.125 5.275 2.25 5.05L1.325 4.125Q1.05 3.85 1.05 3.45Q1.05 3.05 1.35 2.75Q1.625 2.475 2.05 2.475Q2.475 2.475 2.75 2.75L21.275 21.275Q21.55 21.55 21.55 21.95Q21.55 22.35 21.25 22.65Q20.975 22.925 20.55 22.925Q20.125 22.925 19.85 22.65ZM4 18H15.15Q15.15 18 15.15 18Q15.15 18 15.15 18L4 6.85Q4 6.85 4 6.85Q4 6.85 4 6.85V18Q4 18 4 18Q4 18 4 18ZM12.45 9.625Q12.45 9.625 12.45 9.625Q12.45 9.625 12.45 9.625ZM9.55 12.4Q9.55 12.4 9.55 12.4Q9.55 12.4 9.55 12.4Q9.55 12.4 9.55 12.4Q9.55 12.4 9.55 12.4Q9.55 12.4 9.55 12.4Q9.55 12.4 9.55 12.4Z"/>
    </Icon>
  );
});

IconMaterialVideocamOffRounded.displayName = 'AmauiIconMaterialVideocamOffRounded';

export default IconMaterialVideocamOffRounded;
