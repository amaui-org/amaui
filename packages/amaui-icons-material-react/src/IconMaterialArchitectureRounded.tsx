import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchitectureRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchitectureRounded'
      short_name='Architecture'

      {...props}
    >
      <path d="M11.1 11.9 8.4 19.35Q8.375 19.425 8.275 19.525L7.475 20.3Q7.25 20.525 6.963 20.413Q6.675 20.3 6.625 20L6.525 18.925Q6.525 18.925 6.55 18.7L9.35 10.95Q9.725 11.3 10.163 11.537Q10.6 11.775 11.1 11.9ZM12.9 11.9Q13.4 11.775 13.838 11.537Q14.275 11.3 14.65 10.95L17.45 18.7Q17.475 18.775 17.475 18.925L17.375 20Q17.325 20.3 17.038 20.413Q16.75 20.525 16.525 20.3L15.725 19.525Q15.725 19.525 15.6 19.35ZM12 11Q10.75 11 9.875 10.125Q9 9.25 9 8Q9 7.025 9.562 6.262Q10.125 5.5 11 5.2V4Q11 3.575 11.288 3.287Q11.575 3 12 3Q12.425 3 12.713 3.287Q13 3.575 13 4V5.2Q13.875 5.5 14.438 6.262Q15 7.025 15 8Q15 9.25 14.125 10.125Q13.25 11 12 11ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialArchitectureRounded.displayName = 'AmauiIconMaterialArchitectureRounded';

export default IconMaterialArchitectureRounded;
