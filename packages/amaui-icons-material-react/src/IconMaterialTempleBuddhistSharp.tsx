import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTempleBuddhistSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TempleBuddhistSharp'
      short_name='TempleBuddhist'

      {...props}
    >
      <path d="M4 22V12.85Q2.7 12.525 1.85 11.475Q1 10.425 1 9.025H3Q3 9.825 3.587 10.412Q4.175 11 4.975 11H6V8.85Q4.7 8.525 3.85 7.475Q3 6.425 3 5.025H5Q5 5.825 5.588 6.412Q6.175 7 6.975 7H7.5L12 1L16.5 7H17.025Q17.825 7 18.413 6.412Q19 5.825 19 5.025H21Q21 6.425 20.15 7.475Q19.3 8.525 18 8.85V11H19.025Q19.825 11 20.413 10.412Q21 9.825 21 9.025H23Q23 10.425 22.15 11.475Q21.3 12.525 20 12.85V22H13V17H11V22ZM10 7H14L12 4.325ZM8 11H16V9H8ZM6 20H9V15H15V20H18V13H6ZM12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13Q12 13 12 13ZM12 7ZM12 11Z"/>
    </Icon>
  );
});

IconMaterialTempleBuddhistSharp.displayName = 'AmauiIconMaterialTempleBuddhistSharp';

export default IconMaterialTempleBuddhistSharp;
