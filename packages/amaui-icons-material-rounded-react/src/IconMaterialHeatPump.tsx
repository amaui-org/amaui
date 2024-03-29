import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeatPump = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeatPump'

      short_name='HeatPump'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm-.75-2.075V13.8l-1.5 1.5q.35.225.713.388.362.162.787.237Zm1.5 0q.4-.075.775-.237.375-.163.725-.388l-1.5-1.5Zm2.55-1.675q.225-.35.388-.725.162-.375.237-.775H13.8Zm-1.5-3h2.125q-.075-.4-.237-.775-.163-.375-.388-.725Zm-1.05-1.05 1.5-1.5q-.35-.225-.712-.388-.363-.162-.788-.237ZM12 13q.425 0 .713-.288Q13 12.425 13 12t-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12t.288.712Q11.575 13 12 13Zm-.75-2.8V8.075q-.4.075-.775.237-.375.163-.725.388Zm-3.175 1.05H10.2l-1.5-1.5q-.225.35-.388.725-.162.375-.237.775Zm.625 3 1.5-1.5H8.075q.075.4.237.775.163.375.388.725ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14ZM5 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialHeatPump.displayName = 'AmauiIconMaterialHeatPump';

export default IconMaterialHeatPump;
