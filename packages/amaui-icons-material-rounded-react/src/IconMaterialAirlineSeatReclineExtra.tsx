import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatReclineExtra = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineExtra'

      short_name='AirlineSeatReclineExtra'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 6q-.825 0-1.412-.588Q6.5 4.825 6.5 4t.588-1.413Q7.675 2 8.5 2t1.413.587Q10.5 3.175 10.5 4q0 .825-.587 1.412Q9.325 6 8.5 6Zm-.95 14q-.825 0-1.512-.587-.688-.588-.863-1.413l-1.95-9.8q-.1-.475.2-.838.3-.362.8-.362.35 0 .625.225t.35.575L7.25 18H13q.425 0 .713.288.287.287.287.712t-.287.712Q13.425 20 13 20Zm12.825 1.5q-.35.2-.762.087-.413-.112-.613-.462L16.6 17H9.65q-.725 0-1.262-.438-.538-.437-.688-1.162l-1.1-5.35q-.275-1.2.562-2.125Q8 7 9.2 7q.875 0 1.588.525.712.525.912 1.425L12.8 14h3.25q.525 0 .975.275.45.275.725.725l3 5.125q.2.35.1.763-.1.412-.475.612Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineExtra.displayName = 'AmauiIconMaterialAirlineSeatReclineExtra';

export default IconMaterialAirlineSeatReclineExtra;
