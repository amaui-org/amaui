import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddTaskSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddTaskSharpW100Filled'
      short_name='AddTask'

      {...props}
    >
      <path d="M19.65 19.35V16.35H16.65V15.65H19.65V12.65H20.35V15.65H23.35V16.35H20.35V19.35ZM12 20.7Q10.2 20.7 8.613 20.012Q7.025 19.325 5.85 18.15Q4.675 16.975 3.987 15.387Q3.3 13.8 3.3 12Q3.3 10.2 3.987 8.612Q4.675 7.025 5.85 5.85Q7.025 4.675 8.613 3.987Q10.2 3.3 12 3.3Q13.5 3.3 14.85 3.775Q16.2 4.25 17.3 5.1L16.8 5.625Q15.8 4.85 14.575 4.425Q13.35 4 12 4Q8.675 4 6.338 6.337Q4 8.675 4 12Q4 15.325 6.338 17.663Q8.675 20 12 20Q12.9 20 13.75 19.8Q14.6 19.6 15.375 19.25L15.9 19.775Q15.025 20.225 14.038 20.462Q13.05 20.7 12 20.7ZM10.55 15.7 7.2 12.35 7.7 11.85 10.55 14.7 20.2 5.05 20.7 5.55Z"/>
    </Icon>
  );
});

IconMaterialAddTaskSharpW100Filled.displayName = 'AmauiIconMaterialAddTaskSharpW100Filled';

export default IconMaterialAddTaskSharpW100Filled;
