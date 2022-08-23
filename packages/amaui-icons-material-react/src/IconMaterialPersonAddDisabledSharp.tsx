import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPersonAddDisabledSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonAddDisabledSharp'
      short_name='PersonAddDisabled'

      {...props}
    >
      <path d="M19.8 22.6 17 19.8V20H1V17.2Q1 16.35 1.438 15.637Q1.875 14.925 2.6 14.55Q4.15 13.775 5.75 13.387Q7.35 13 9 13Q9.325 13 9.638 13.012Q9.95 13.025 10.25 13.05L9.2 12Q9.15 12 9.1 12Q9.05 12 9 12Q7.35 12 6.175 10.825Q5 9.65 5 8Q5 7.95 5 7.9Q5 7.85 5 7.8L1.4 4.2L2.825 2.775L21.225 21.175ZM18 14V11H15V9H18V6H20V9H23V11H20V14ZM12.6 9.7 11 8.1Q11 8.075 11 8.05Q11 8.025 11 8Q11 7.175 10.413 6.588Q9.825 6 9 6Q8.975 6 8.95 6Q8.925 6 8.9 6L7.3 4.4Q7.675 4.2 8.113 4.1Q8.55 4 9 4Q10.65 4 11.825 5.175Q13 6.35 13 8Q13 8.45 12.9 8.887Q12.8 9.325 12.6 9.7ZM3 18H15V17.8L12.85 15.65Q11.9 15.325 10.925 15.162Q9.95 15 9 15Q7.6 15 6.225 15.337Q4.85 15.675 3.5 16.35Q3.275 16.475 3.138 16.7Q3 16.925 3 17.2ZM11 8.1Q11 8.1 11 8.1Q11 8.1 11 8.1Q11 8.1 11 8.1Q11 8.1 11 8.1Q11 8.1 11 8.1Q11 8.1 11 8.1ZM9 15Q9 15 9 15Q9 15 9 15Q9 15 9 15Q9 15 9 15Q9 15 9 15Q9 15 9 15Z"/>
    </Icon>
  );
});

IconMaterialPersonAddDisabledSharp.displayName = 'AmauiIconMaterialPersonAddDisabledSharp';

export default IconMaterialPersonAddDisabledSharp;
