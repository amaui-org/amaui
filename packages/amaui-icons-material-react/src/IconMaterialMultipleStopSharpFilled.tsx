import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMultipleStopSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MultipleStopSharpFilled'
      short_name='MultipleStop'

      {...props}
    >
      <path d="M10 9Q9.575 9 9.288 8.712Q9 8.425 9 8Q9 7.575 9.288 7.287Q9.575 7 10 7Q10.425 7 10.713 7.287Q11 7.575 11 8Q11 8.425 10.713 8.712Q10.425 9 10 9ZM6 9Q5.575 9 5.287 8.712Q5 8.425 5 8Q5 7.575 5.287 7.287Q5.575 7 6 7Q6.425 7 6.713 7.287Q7 7.575 7 8Q7 8.425 6.713 8.712Q6.425 9 6 9ZM14 17Q13.575 17 13.288 16.712Q13 16.425 13 16Q13 15.575 13.288 15.287Q13.575 15 14 15Q14.425 15 14.713 15.287Q15 15.575 15 16Q15 16.425 14.713 16.712Q14.425 17 14 17ZM17 12 15.575 10.6 17.175 9H13V7H17.175L15.6 5.4L17 4L21 8ZM7 20 3 16 7 12 8.425 13.4 6.825 15H11V17H6.825L8.4 18.6ZM18 17Q17.575 17 17.288 16.712Q17 16.425 17 16Q17 15.575 17.288 15.287Q17.575 15 18 15Q18.425 15 18.712 15.287Q19 15.575 19 16Q19 16.425 18.712 16.712Q18.425 17 18 17Z"/>
    </Icon>
  );
});

IconMaterialMultipleStopSharpFilled.displayName = 'AmauiIconMaterialMultipleStopSharpFilled';

export default IconMaterialMultipleStopSharpFilled;
