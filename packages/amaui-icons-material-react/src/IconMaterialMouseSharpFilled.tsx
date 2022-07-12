import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMouseSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseSharpFilled'
      short_name='Mouse'

      {...props}
    >
      <path d="M12 22Q9.1 22 7.05 19.95Q5 17.9 5 15V11H19V15Q19 17.9 16.95 19.95Q14.9 22 12 22ZM5 9Q5 6.35 6.725 4.4Q8.45 2.45 11 2.075V9ZM13 9V2.075Q15.55 2.45 17.275 4.4Q19 6.35 19 9Z"/>
    </Icon>
  )
});

export default IconMaterialMouseSharpFilled;
