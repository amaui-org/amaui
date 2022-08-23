import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTextRotationNoneRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationNoneRounded'
      short_name='TextRotationNone'

      {...props}
    >
      <path d="M16.85 20.75Q16.55 20.45 16.55 20.038Q16.55 19.625 16.85 19.325L17.2 19H4.975Q4.55 19 4.275 18.712Q4 18.425 4 18Q4 17.575 4.287 17.288Q4.575 17 5 17H17.2L16.825 16.65Q16.55 16.375 16.562 15.95Q16.575 15.525 16.85 15.25Q17.125 14.975 17.55 14.975Q17.975 14.975 18.25 15.25L20.275 17.3Q20.425 17.45 20.5 17.637Q20.575 17.825 20.575 18.025Q20.575 18.225 20.513 18.413Q20.45 18.6 20.3 18.75L18.275 20.775Q17.975 21.075 17.562 21.062Q17.15 21.05 16.85 20.75ZM8.175 14Q7.625 14 7.388 13.637Q7.15 13.275 7.35 12.775L10.65 3.925Q10.8 3.55 11.188 3.275Q11.575 3 12 3Q12.425 3 12.8 3.275Q13.175 3.55 13.325 3.925L16.625 12.775Q16.825 13.275 16.575 13.637Q16.325 14 15.775 14Q15.525 14 15.3 13.837Q15.075 13.675 15 13.45L14.25 11.2H9.8L8.975 13.45Q8.9 13.675 8.675 13.837Q8.45 14 8.175 14ZM10.35 9.6H13.65L12.05 5.05H11.95Z"/>
    </Icon>
  );
});

IconMaterialTextRotationNoneRounded.displayName = 'AmauiIconMaterialTextRotationNoneRounded';

export default IconMaterialTextRotationNoneRounded;
