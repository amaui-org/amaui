import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextFormatRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextFormatRounded'
      short_name='TextFormat'

      {...props}
    >
      <path d="M6 19Q5.575 19 5.287 18.712Q5 18.425 5 18Q5 17.575 5.287 17.288Q5.575 17 6 17H18Q18.425 17 18.712 17.288Q19 17.575 19 18Q19 18.425 18.712 18.712Q18.425 19 18 19ZM10.35 10.6H13.65L12.05 6.05H11.95ZM8.175 15Q7.625 15 7.388 14.637Q7.15 14.275 7.35 13.775L10.65 4.925Q10.8 4.55 11.188 4.275Q11.575 4 12 4Q12.425 4 12.8 4.275Q13.175 4.55 13.325 4.925L16.625 13.775Q16.825 14.275 16.575 14.637Q16.325 15 15.775 15Q15.525 15 15.3 14.837Q15.075 14.675 15 14.45L14.25 12.2H9.8L8.975 14.45Q8.9 14.675 8.675 14.837Q8.45 15 8.175 15Z"/>
    </Icon>
  );
});

IconMaterialTextFormatRounded.displayName = 'AmauiIconMaterialTextFormatRounded';

export default IconMaterialTextFormatRounded;
