import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMouseSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseSharpW100'
      short_name='Mouse'

      {...props}
    >
      <path d="M12 20.7Q9.625 20.7 7.963 19.038Q6.3 17.375 6.3 15V9.1Q6.3 6.725 7.963 5.062Q9.625 3.4 12 3.4Q14.375 3.4 16.038 5.062Q17.7 6.725 17.7 9.1V15Q17.7 17.375 16.038 19.038Q14.375 20.7 12 20.7ZM12.35 9.1H17Q17 7.075 15.637 5.65Q14.275 4.225 12.35 4.1ZM7 9.1H11.65V4.1Q9.725 4.225 8.363 5.65Q7 7.075 7 9.1ZM12 20Q14.075 20 15.538 18.538Q17 17.075 17 15V9.8H7V15Q7 17.075 8.463 18.538Q9.925 20 12 20ZM12 9.8Q12 9.8 12 9.8Q12 9.8 12 9.8ZM12.35 9.1Q12.35 9.1 12.35 9.1Q12.35 9.1 12.35 9.1ZM11.65 9.1Q11.65 9.1 11.65 9.1Q11.65 9.1 11.65 9.1ZM12 9.8Q12 9.8 12 9.8Q12 9.8 12 9.8Q12 9.8 12 9.8Q12 9.8 12 9.8Z"/>
    </Icon>
  );
});

IconMaterialMouseSharpW100.displayName = 'AmauiIconMaterialMouseSharpW100';

export default IconMaterialMouseSharpW100;
