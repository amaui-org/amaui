import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNearbyErrorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyErrorFilled'

      short_name='NearbyError'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21 18q-.425 0-.712-.288Q20 17.425 20 17v-6q0-.425.288-.713Q20.575 10 21 10t.712.287Q22 10.575 22 11v6q0 .425-.288.712Q21.425 18 21 18Zm0 4q-.425 0-.712-.288Q20 21.425 20 21t.288-.712Q20.575 20 21 20t.712.288Q22 20.575 22 21t-.288.712Q21.425 22 21 22Zm-10.4-.6-8-8Q2 12.8 2 12q0-.8.6-1.4l8-8Q11.2 2 12 2q.8 0 1.4.6L18 7.2v3.6l-6-6L4.8 12l7.2 7.2 6-6v3.6l-4.6 4.6q-.6.6-1.4.6-.8 0-1.4-.6Zm.7-5.7-3-3Q8 12.4 8 12q0-.4.3-.7l3-3q.3-.3.7-.3.4 0 .7.3l3 3q.3.3.3.7 0 .4-.3.7l-3 3q-.3.3-.7.3-.4 0-.7-.3Z"/>
    </Icon>
  );
});

IconMaterialNearbyErrorFilled.displayName = 'AmauiIconMaterialNearbyErrorFilled';

export default IconMaterialNearbyErrorFilled;
