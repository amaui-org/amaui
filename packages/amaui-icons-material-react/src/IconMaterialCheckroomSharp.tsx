import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCheckroomSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckroomSharp'
      short_name='Checkroom'

      {...props}
    >
      <path d="M3 20Q2.275 20 2.05 19.312Q1.825 18.625 2.4 18.2L11 11.75V10Q11 9.575 11.275 9.287Q11.55 9 11.975 9Q12.625 9.025 13.062 8.587Q13.5 8.15 13.5 7.5Q13.5 6.875 13.062 6.438Q12.625 6 12 6Q11.375 6 10.938 6.438Q10.5 6.875 10.5 7.5H8.5Q8.5 6.05 9.525 5.025Q10.55 4 12 4Q13.45 4 14.475 5.012Q15.5 6.025 15.5 7.45Q15.5 8.65 14.8 9.575Q14.1 10.5 13 10.85V11.75L21.6 18.2Q22.175 18.625 21.95 19.312Q21.725 20 21 20ZM6 18H18L12 13.5Z"/>
    </Icon>
  );
});

IconMaterialCheckroomSharp.displayName = 'AmauiIconMaterialCheckroomSharp';

export default IconMaterialCheckroomSharp;
