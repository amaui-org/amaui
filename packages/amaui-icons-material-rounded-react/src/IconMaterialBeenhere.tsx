import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeenhere = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Beenhere'

      short_name='Beenhere'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.5q-.325 0-.625-.1t-.575-.3l-6-4.5q-.375-.275-.587-.7Q4 16.475 4 16V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v12q0 .475-.212.9-.213.425-.588.7l-6 4.5q-.275.2-.575.3-.3.1-.625.1Zm0-2 6-4.5V4H6v12Zm-1.05-5.925q.2 0 .388-.075.187-.075.312-.2l4.25-4.25q.275-.275.275-.688 0-.412-.275-.712-.3-.3-.712-.313-.413-.012-.713.288L10.95 12.15l-1.4-1.4q-.275-.275-.687-.275-.413 0-.713.275-.3.3-.312.712-.013.413.287.713L10.25 14.3q.125.125.312.2.188.075.388.075ZM12 4H6h12Z"/>
    </Icon>
  );
});

IconMaterialBeenhere.displayName = 'AmauiIconMaterialBeenhere';

export default IconMaterialBeenhere;
