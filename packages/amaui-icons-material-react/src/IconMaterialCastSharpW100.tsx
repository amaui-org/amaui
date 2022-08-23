import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastSharpW100'
      short_name='Cast'

      {...props}
    >
      <path d="M14.3 18.7V18H20V6H4V7.7H3.3V5.3H20.7V18.7ZM3.3 18.7H4.9Q4.9 18.05 4.425 17.575Q3.95 17.1 3.3 17.1ZM7.9 18.7H8.6Q8.6 16.5 7.05 14.95Q5.5 13.4 3.3 13.4V14.1Q5.225 14.15 6.562 15.475Q7.9 16.8 7.9 18.7ZM3.3 9.7V10.4Q5.025 10.4 6.538 11.05Q8.05 11.7 9.175 12.825Q10.3 13.95 10.95 15.463Q11.6 16.975 11.6 18.7H12.3Q12.3 16.825 11.588 15.188Q10.875 13.55 9.663 12.337Q8.45 11.125 6.813 10.412Q5.175 9.7 3.3 9.7ZM11.65 12Z"/>
    </Icon>
  );
});

IconMaterialCastSharpW100.displayName = 'AmauiIconMaterialCastSharpW100';

export default IconMaterialCastSharpW100;
