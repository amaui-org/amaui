import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSports = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Sports'

      short_name='Sports'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19q-2.5 0-4.25-1.75T5 13q0-.275.025-.55t.075-.55q-.15.05-.3.075-.15.025-.3.025-1.05 0-1.775-.725Q2 10.55 2 9.5q0-1.05.688-1.775Q3.375 7 4.425 7q.825 0 1.487.463.663.462.938 1.187.825-.75 1.888-1.2Q9.8 7 11 7h11v4h-5v2q0 2.5-1.75 4.25T11 19Zm-6.5-8.5q.425 0 .713-.288.287-.287.287-.712t-.287-.713Q4.925 8.5 4.5 8.5t-.712.287Q3.5 9.075 3.5 9.5t.288.712q.287.288.712.288Zm6.5 6q1.45 0 2.475-1.025Q14.5 14.45 14.5 13q0-1.45-1.025-2.475Q12.45 9.5 11 9.5q-1.45 0-2.475 1.025Q7.5 11.55 7.5 13q0 1.45 1.025 2.475Q9.55 16.5 11 16.5Zm0-1.5q.825 0 1.413-.588Q13 13.825 13 13t-.587-1.413Q11.825 11 11 11q-.825 0-1.412.587Q9 12.175 9 13q0 .825.588 1.412Q10.175 15 11 15Zm0-2Z"/>
    </Icon>
  );
});

IconMaterialSports.displayName = 'AmauiIconMaterialSports';

export default IconMaterialSports;
