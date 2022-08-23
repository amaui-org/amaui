import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPottedPlantRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PottedPlantRoundedW100'
      short_name='PottedPlant'

      {...props}
    >
      <path d="M9.3 20h5.4q.275 0 .488-.163.212-.162.287-.437l1.125-4.45H7.4l1.125 4.45q.075.275.287.437.213.163.488.163Zm0 .7q-.5 0-.912-.313-.413-.312-.538-.812L6.675 14.95h10.65l-1.175 4.625q-.125.5-.537.812-.413.313-.913.313Zm-3-6.45h11.45q.35 0 .575-.225.225-.225.225-.575V12H5.5v1.45q0 .35.225.575.225.225.575.225ZM7.95 4.4q1.6.375 2.713 1.6Q11.775 7.225 12 8.875q.225-1.65 1.338-2.875 1.112-1.225 2.712-1.6.2-.05.35.1.15.15.1.35-.375 1.5-1.512 2.587Q13.85 8.525 12.35 8.85v2.45h6.15q.325 0 .538.212.212.213.212.538v1.4q0 .625-.438 1.062-.437.438-1.062.438H6.3q-.625 0-1.062-.438-.438-.437-.438-1.062v-1.4q0-.325.213-.538.212-.212.537-.212h6.1V8.85q-1.5-.325-2.638-1.413Q7.875 6.35 7.5 4.85q-.05-.2.1-.35.15-.15.35-.1Z"/>
    </Icon>
  );
});

IconMaterialPottedPlantRoundedW100.displayName = 'AmauiIconMaterialPottedPlantRoundedW100';

export default IconMaterialPottedPlantRoundedW100;
