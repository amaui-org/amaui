import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialControlPointDuplicateSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlPointDuplicateSharpFilled'
      short_name='ControlPointDuplicate'

      {...props}
    >
      <path d="M14 16H16V13H19V11H16V8H14V11H11V13H14ZM6 20.5Q3.275 19.55 1.638 17.212Q0 14.875 0 12Q0 9.125 1.638 6.787Q3.275 4.45 6 3.5V5.7Q4.15 6.575 3.075 8.275Q2 9.975 2 12Q2 14.025 3.075 15.725Q4.15 17.425 6 18.3ZM15 21Q13.125 21 11.488 20.288Q9.85 19.575 8.638 18.362Q7.425 17.15 6.713 15.512Q6 13.875 6 12Q6 10.125 6.713 8.487Q7.425 6.85 8.638 5.637Q9.85 4.425 11.488 3.712Q13.125 3 15 3Q16.875 3 18.513 3.712Q20.15 4.425 21.363 5.637Q22.575 6.85 23.288 8.487Q24 10.125 24 12Q24 13.875 23.288 15.512Q22.575 17.15 21.363 18.362Q20.15 19.575 18.513 20.288Q16.875 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialControlPointDuplicateSharpFilled.displayName = 'AmauiIconMaterialControlPointDuplicateSharpFilled';

export default IconMaterialControlPointDuplicateSharpFilled;
