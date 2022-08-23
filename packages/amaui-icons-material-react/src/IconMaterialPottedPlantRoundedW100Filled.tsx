import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPottedPlantRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantRoundedW100Filled'
      short_name='PottedPlant'

      {...props}
    >
      <path d="M9.3 20.7q-.5 0-.9-.313-.4-.312-.55-.812l-1-3.925h10.3l-1 3.925q-.15.5-.55.812-.4.313-.9.313ZM7.95 4.4q1.6.375 2.713 1.6Q11.775 7.225 12 8.875q.225-1.65 1.338-2.875 1.112-1.225 2.712-1.6.2-.05.35.1.15.15.1.35-.375 1.5-1.512 2.587Q13.85 8.525 12.35 8.85v2.45h6.15q.325 0 .538.212.212.213.212.538v1.4q0 .625-.438 1.062-.437.438-1.062.438H6.3q-.625 0-1.062-.438-.438-.437-.438-1.062v-1.4q0-.325.213-.538.212-.212.537-.212h6.1V8.85q-1.5-.325-2.638-1.413Q7.875 6.35 7.5 4.85q-.05-.2.1-.35.15-.15.35-.1Z"/>
    </Icon>
  );
});

IconMaterialPottedPlantRoundedW100Filled.displayName = 'AmauiIconMaterialPottedPlantRoundedW100Filled';

export default IconMaterialPottedPlantRoundedW100Filled;
