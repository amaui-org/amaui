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
      <path d="M20 18v-8h2v8Zm1 4q-.425 0-.712-.288Q20 21.425 20 21t.288-.712Q20.575 20 21 20t.712.288Q22 20.575 22 21t-.288.712Q21.425 22 21 22Zm-9 .8L1.2 12 12 1.2l6 6v3.6l-6-6L4.8 12l7.2 7.2 6-6v3.6Zm0-6.4L7.6 12 12 7.6l4.4 4.4Z"/>
    </Icon>
  );
});

IconMaterialNearbyErrorFilled.displayName = 'AmauiIconMaterialNearbyErrorFilled';

export default IconMaterialNearbyErrorFilled;
