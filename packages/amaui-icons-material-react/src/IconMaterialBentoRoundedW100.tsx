import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoRoundedW100'
      short_name='Bento'

      {...props}
    >
      <path d="M4.65 17.85Q4 17.85 3.575 17.425Q3.15 17 3.15 16.35V7.65Q3.15 7 3.575 6.575Q4 6.15 4.65 6.15H19.35Q20 6.15 20.425 6.575Q20.85 7 20.85 7.65V16.35Q20.85 17 20.425 17.425Q20 17.85 19.35 17.85ZM13.1 11.65H20.15V7.65Q20.15 7.35 19.9 7.1Q19.65 6.85 19.35 6.85H13.1ZM4.65 17.15H12.4V6.85H4.65Q4.35 6.85 4.1 7.1Q3.85 7.35 3.85 7.65V16.35Q3.85 16.65 4.1 16.9Q4.35 17.15 4.65 17.15ZM8 12.9Q7.625 12.9 7.363 12.637Q7.1 12.375 7.1 12Q7.1 11.625 7.363 11.363Q7.625 11.1 8 11.1Q8.375 11.1 8.637 11.363Q8.9 11.625 8.9 12Q8.9 12.375 8.637 12.637Q8.375 12.9 8 12.9ZM13.1 17.15H19.35Q19.65 17.15 19.9 16.9Q20.15 16.65 20.15 16.35V12.35H13.1Z"/>
    </Icon>
  );
});

IconMaterialBentoRoundedW100.displayName = 'AmauiIconMaterialBentoRoundedW100';

export default IconMaterialBentoRoundedW100;
