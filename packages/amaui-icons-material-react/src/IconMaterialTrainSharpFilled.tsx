import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTrainSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TrainSharpFilled'
      short_name='Train'

      {...props}
    >
      <path d="M4 15.5V6Q4 4.675 4.688 3.887Q5.375 3.1 6.5 2.687Q7.625 2.275 9.062 2.137Q10.5 2 12 2Q13.65 2 15.113 2.137Q16.575 2.275 17.663 2.687Q18.75 3.1 19.375 3.887Q20 4.675 20 6V15.5Q20 16.975 18.988 17.988Q17.975 19 16.5 19L18 20.5V21H16L14 19H10L8 21H6V20.5L7.5 19Q6.025 19 5.013 17.988Q4 16.975 4 15.5ZM6 10H11V7H6ZM13 10H18V7H13ZM8.5 16Q9.15 16 9.575 15.575Q10 15.15 10 14.5Q10 13.85 9.575 13.425Q9.15 13 8.5 13Q7.85 13 7.425 13.425Q7 13.85 7 14.5Q7 15.15 7.425 15.575Q7.85 16 8.5 16ZM15.5 16Q16.15 16 16.575 15.575Q17 15.15 17 14.5Q17 13.85 16.575 13.425Q16.15 13 15.5 13Q14.85 13 14.425 13.425Q14 13.85 14 14.5Q14 15.15 14.425 15.575Q14.85 16 15.5 16Z"/>
    </Icon>
  );
});

IconMaterialTrainSharpFilled.displayName = 'AmauiIconMaterialTrainSharpFilled';

export default IconMaterialTrainSharpFilled;
