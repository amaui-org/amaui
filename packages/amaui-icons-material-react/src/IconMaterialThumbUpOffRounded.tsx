import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThumbUpOffRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThumbUpOffRounded'
      short_name='ThumbUpOff'

      {...props}
    >
      <path d="M3 21Q2.15 21 1.575 20.425Q1 19.85 1 19.025V11Q1 10.175 1.588 9.587Q2.175 9 3 9Q3.85 9 4.425 9.575Q5 10.15 5 10.975V19Q5 19.825 4.412 20.413Q3.825 21 3 21ZM9 21Q8.175 21 7.588 20.413Q7 19.825 7 19V9Q7 8.6 7.15 8.238Q7.3 7.875 7.575 7.6L13.125 2.05Q13.55 1.625 14.175 1.625Q14.8 1.625 15.225 2.05Q15.5 2.325 15.613 2.687Q15.725 3.05 15.65 3.425L14.7 8H21Q21.8 8 22.4 8.6Q23 9.2 23 10V12Q23 12.175 22.962 12.375Q22.925 12.575 22.85 12.75L19.825 19.8Q19.55 20.4 18.988 20.7Q18.425 21 17.825 21ZM9 19H18Q18 19 18 19Q18 19 18 19L21 12Q21 12 21 12Q21 12 21 12V10Q21 10 21 10Q21 10 21 10H12L13.35 4.65L9 9V19Q9 19 9 19Q9 19 9 19ZM9 19Q9 19 9 19Q9 19 9 19V9V10Q9 10 9 10Q9 10 9 10V12Q9 12 9 12Q9 12 9 12V19Q9 19 9 19Q9 19 9 19Z"/>
    </Icon>
  );
});

IconMaterialThumbUpOffRounded.displayName = 'AmauiIconMaterialThumbUpOffRounded';

export default IconMaterialThumbUpOffRounded;
