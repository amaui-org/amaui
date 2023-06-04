import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalLibraryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibraryW100Filled'

      short_name='LocalLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.425 20.275q-1.425-1-3.038-1.625-1.612-.625-3.387-.875-.3-.05-.5-.275-.2-.225-.2-.5V9.55q0-.3.213-.488.212-.187.487-.137 2.025.275 3.812 1.225Q10.6 11.1 12 12.3q1.4-1.2 3.188-2.15Q16.975 9.2 19 8.925q.275-.05.488.137.212.188.212.488V17q0 .275-.2.5-.2.225-.5.275-1.775.25-3.387.875-1.613.625-3.038 1.625-.25.175-.575.175-.325 0-.575-.175ZM12 8.45q-1.225 0-2.113-.888Q9 6.675 9 5.45q0-1.25.887-2.125.888-.875 2.113-.875 1.25 0 2.125.875T15 5.45q0 1.225-.875 2.112-.875.888-2.125.888Z"/>
    </Icon>
  );
});

IconMaterialLocalLibraryW100Filled.displayName = 'AmauiIconMaterialLocalLibraryW100Filled';

export default IconMaterialLocalLibraryW100Filled;
