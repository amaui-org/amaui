import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBeenhereFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BeenhereFilled'

      short_name='Beenhere'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.5q-.325 0-.625-.1t-.575-.3l-6-4.5q-.375-.275-.587-.7Q4 16.475 4 16V4q0-.825.588-1.413Q5.175 2 6 2h12q.825 0 1.413.587Q20 3.175 20 4v12q0 .475-.212.9-.213.425-.588.7l-6 4.5q-.275.2-.575.3-.3.1-.625.1Zm-1.05-7.925q.2 0 .375-.063.175-.062.325-.212l4.25-4.25q.3-.3.288-.7-.013-.4-.288-.7-.3-.3-.712-.313-.413-.012-.713.288L10.95 12.15l-1.4-1.4q-.15-.15-.325-.225-.175-.075-.362-.075-.188 0-.375.075-.188.075-.338.225-.3.3-.312.712-.013.413.287.713L10.25 14.3q.15.15.325.212.175.063.375.063Z"/>
    </Icon>
  );
});

IconMaterialBeenhereFilled.displayName = 'AmauiIconMaterialBeenhereFilled';

export default IconMaterialBeenhereFilled;
