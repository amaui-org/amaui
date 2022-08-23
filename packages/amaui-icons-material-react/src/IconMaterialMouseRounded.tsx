import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMouseRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseRounded'
      short_name='Mouse'

      {...props}
    >
      <path d="M12 22Q9.1 22 7.05 19.95Q5 17.9 5 15V9Q5 6.1 7.05 4.05Q9.1 2 12 2Q14.9 2 16.95 4.05Q19 6.1 19 9V15Q19 17.9 16.95 19.95Q14.9 22 12 22ZM13 9H17Q17 7.2 15.863 5.825Q14.725 4.45 13 4.1ZM7 9H11V4.1Q9.275 4.45 8.137 5.825Q7 7.2 7 9ZM12 20Q14.075 20 15.538 18.538Q17 17.075 17 15V11H7V15Q7 17.075 8.463 18.538Q9.925 20 12 20ZM12 11Q12 11 12 11Q12 11 12 11ZM13 9Q13 9 13 9Q13 9 13 9ZM11 9Q11 9 11 9Q11 9 11 9ZM12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Q12 11 12 11Z"/>
    </Icon>
  );
});

IconMaterialMouseRounded.displayName = 'AmauiIconMaterialMouseRounded';

export default IconMaterialMouseRounded;
