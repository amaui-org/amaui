import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSetMealSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SetMealSharp'
      short_name='SetMeal'

      {...props}
    >
      <path d="M1 15Q1 15 1 15Q1 15 1 15V2H23V15ZM3 13H21V4H3ZM3.075 18.5 3 17 20.975 16.05 21.05 17.55ZM3 20.975V19.475H21V20.975ZM3 13V4ZM10.25 11.5Q12.2 11.5 13.888 10.825Q15.575 10.15 16.8 8.85Q16.95 9.875 17.9 10.438Q18.85 11 20 11V6Q18.825 6 17.887 6.588Q16.95 7.175 16.8 8.2Q15.45 6.85 13.812 6.175Q12.175 5.5 10.25 5.5Q8.1 5.5 6.275 6.312Q4.45 7.125 3.5 8.5Q4.45 9.875 6.275 10.688Q8.1 11.5 10.25 11.5Z"/>
    </Icon>
  );
});

IconMaterialSetMealSharp.displayName = 'AmauiIconMaterialSetMealSharp';

export default IconMaterialSetMealSharp;
