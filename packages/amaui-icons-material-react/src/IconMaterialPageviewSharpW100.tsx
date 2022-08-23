import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPageviewSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PageviewSharpW100'
      short_name='Pageview'

      {...props}
    >
      <path d="M16.6 16.75 17.1 16.25 14.15 13.3Q14.5 12.8 14.6 12.4Q14.7 12 14.7 11.5Q14.7 10.175 13.763 9.237Q12.825 8.3 11.5 8.3Q10.175 8.3 9.238 9.237Q8.3 10.175 8.3 11.5Q8.3 12.825 9.238 13.762Q10.175 14.7 11.5 14.7Q12.15 14.7 12.7 14.487Q13.25 14.275 13.7 13.85ZM11.5 14Q10.45 14 9.725 13.275Q9 12.55 9 11.5Q9 10.45 9.725 9.725Q10.45 9 11.5 9Q12.55 9 13.275 9.725Q14 10.45 14 11.5Q14 12.55 13.275 13.275Q12.55 14 11.5 14ZM3.3 18.7V5.3H20.7V18.7ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialPageviewSharpW100.displayName = 'AmauiIconMaterialPageviewSharpW100';

export default IconMaterialPageviewSharpW100;
