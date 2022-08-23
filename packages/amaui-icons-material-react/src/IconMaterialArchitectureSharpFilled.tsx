import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialArchitectureSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArchitectureSharpFilled'
      short_name='Architecture'

      {...props}
    >
      <path d="M6.75 21 6.5 18.8 9.35 10.95Q9.725 11.3 10.163 11.537Q10.6 11.775 11.1 11.9L8.35 19.45ZM17.25 21 15.65 19.45 12.9 11.9Q13.4 11.775 13.838 11.537Q14.275 11.3 14.65 10.95L17.5 18.8ZM12 11Q10.75 11 9.875 10.125Q9 9.25 9 8Q9 7.025 9.562 6.262Q10.125 5.5 11 5.2V3H13V5.2Q13.875 5.5 14.438 6.262Q15 7.025 15 8Q15 9.25 14.125 10.125Q13.25 11 12 11ZM12 9Q12.425 9 12.713 8.712Q13 8.425 13 8Q13 7.575 12.713 7.287Q12.425 7 12 7Q11.575 7 11.288 7.287Q11 7.575 11 8Q11 8.425 11.288 8.712Q11.575 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialArchitectureSharpFilled.displayName = 'AmauiIconMaterialArchitectureSharpFilled';

export default IconMaterialArchitectureSharpFilled;
