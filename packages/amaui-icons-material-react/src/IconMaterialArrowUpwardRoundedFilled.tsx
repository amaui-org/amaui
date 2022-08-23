import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowUpwardRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowUpwardRoundedFilled'
      short_name='ArrowUpward'

      {...props}
    >
      <path d="M12 20Q11.575 20 11.288 19.712Q11 19.425 11 19V7.825L6.125 12.7Q5.825 13 5.412 13Q5 13 4.7 12.7Q4.4 12.4 4.4 12Q4.4 11.6 4.7 11.3L11.3 4.7Q11.45 4.55 11.625 4.487Q11.8 4.425 12 4.425Q12.2 4.425 12.388 4.487Q12.575 4.55 12.7 4.7L19.3 11.3Q19.6 11.6 19.6 12Q19.6 12.4 19.3 12.7Q19 13 18.587 13Q18.175 13 17.875 12.7L13 7.825V19Q13 19.425 12.713 19.712Q12.425 20 12 20Z"/>
    </Icon>
  );
});

IconMaterialArrowUpwardRoundedFilled.displayName = 'AmauiIconMaterialArrowUpwardRoundedFilled';

export default IconMaterialArrowUpwardRoundedFilled;
