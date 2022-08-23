import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBentoSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BentoSharpW100'
      short_name='Bento'

      {...props}
    >
      <path d="M3.15 17.85V6.15H20.85V17.85ZM13.1 11.65H20.15V6.85H13.1ZM3.85 17.15H12.4V6.85H3.85ZM8 12.9Q7.625 12.9 7.363 12.637Q7.1 12.375 7.1 12Q7.1 11.625 7.363 11.363Q7.625 11.1 8 11.1Q8.375 11.1 8.637 11.363Q8.9 11.625 8.9 12Q8.9 12.375 8.637 12.637Q8.375 12.9 8 12.9ZM13.1 17.15H20.15V12.35H13.1Z"/>
    </Icon>
  );
});

IconMaterialBentoSharpW100.displayName = 'AmauiIconMaterialBentoSharpW100';

export default IconMaterialBentoSharpW100;
