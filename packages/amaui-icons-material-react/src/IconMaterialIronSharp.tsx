import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialIronSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronSharp'
      short_name='Iron'

      {...props}
    >
      <path d="M2 18V15Q2 13.35 3.175 12.175Q4.35 11 6 11H15V9H9V10H7V7H17V14H18V6H22V8H20V16H17V18ZM4 16H15V13H6Q5.175 13 4.588 13.587Q4 14.175 4 15ZM15 16V15Q15 14.175 15 13.587Q15 13 15 13V16Z"/>
    </Icon>
  );
});

IconMaterialIronSharp.displayName = 'AmauiIconMaterialIronSharp';

export default IconMaterialIronSharp;
