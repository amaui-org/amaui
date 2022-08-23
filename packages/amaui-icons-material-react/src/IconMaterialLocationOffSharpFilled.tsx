import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialLocationOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationOffSharpFilled'
      short_name='LocationOff'

      {...props}
    >
      <path d="M19.8 22.6 14.8 17.625Q14.325 18.275 13.9 19.2Q13.475 20.125 13.175 20.9Q13 21.325 12.7 21.663Q12.4 22 11.975 22Q11.55 22 11.238 21.663Q10.925 21.325 10.775 20.9Q10.275 19.575 9.413 18.188Q8.55 16.8 7.675 15.7Q6.6 14.15 5.8 12.675Q5 11.2 5 9Q5 8.725 5.025 8.45Q5.05 8.175 5.1 7.9L1.4 4.2L2.8 2.8L21.2 21.2ZM17.2 14.35 13.875 10.925Q14.2 10.575 14.35 10.162Q14.5 9.75 14.5 9.25Q14.5 8.2 13.775 7.475Q13.05 6.75 12 6.75Q11.525 6.75 11.075 6.912Q10.625 7.075 10.325 7.425L6.95 4.15Q7.925 3.125 9.213 2.562Q10.5 2 12 2Q14.9 2 16.95 4.05Q19 6.1 19 9Q19 10.725 18.475 11.975Q17.95 13.225 17.2 14.35Z"/>
    </Icon>
  );
});

IconMaterialLocationOffSharpFilled.displayName = 'AmauiIconMaterialLocationOffSharpFilled';

export default IconMaterialLocationOffSharpFilled;
