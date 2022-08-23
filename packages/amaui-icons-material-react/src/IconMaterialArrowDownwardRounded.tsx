import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArrowDownwardRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowDownwardRounded'
      short_name='ArrowDownward'

      {...props}
    >
      <path d="M12 19.575Q11.8 19.575 11.625 19.512Q11.45 19.45 11.3 19.3L4.7 12.7Q4.4 12.4 4.4 11.987Q4.4 11.575 4.7 11.275Q5 10.975 5.4 10.975Q5.8 10.975 6.1 11.275L11 16.175V4.975Q11 4.55 11.288 4.275Q11.575 4 12 4Q12.425 4 12.713 4.287Q13 4.575 13 5V16.175L17.9 11.275Q18.2 10.975 18.6 10.975Q19 10.975 19.3 11.275Q19.6 11.575 19.6 11.987Q19.6 12.4 19.3 12.7L12.7 19.3Q12.55 19.45 12.375 19.512Q12.2 19.575 12 19.575Z"/>
    </Icon>
  );
});

IconMaterialArrowDownwardRounded.displayName = 'AmauiIconMaterialArrowDownwardRounded';

export default IconMaterialArrowDownwardRounded;
