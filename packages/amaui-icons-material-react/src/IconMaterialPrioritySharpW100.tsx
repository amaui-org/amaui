import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPrioritySharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrioritySharpW100'
      short_name='Priority'

      {...props}
    >
      <path d="M9 19.7Q7.05 19.7 5.675 18.325Q4.3 16.95 4.3 15V9Q4.3 7.05 5.675 5.675Q7.05 4.3 9 4.3H15Q16.95 4.3 18.325 5.675Q19.7 7.05 19.7 9V15Q19.7 16.95 18.325 18.325Q16.95 19.7 15 19.7ZM11 15.1 16.1 10 15.6 9.5 11 14.1 8.8 11.9 8.3 12.4ZM9 19H15Q16.65 19 17.825 17.825Q19 16.65 19 15V9Q19 7.35 17.825 6.175Q16.65 5 15 5H9Q7.35 5 6.175 6.175Q5 7.35 5 9V15Q5 16.65 6.175 17.825Q7.35 19 9 19ZM12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Q12 12 12 12Z"/>
    </Icon>
  );
});

IconMaterialPrioritySharpW100.displayName = 'AmauiIconMaterialPrioritySharpW100';

export default IconMaterialPrioritySharpW100;
