import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdGroupOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupOffW100'

      short_name='AdGroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m773-300-22-22h23v-398H353l-79-79v-29h528v528h-29Zm43 196L628-292H266v-362L104-816l20-20 712 712-20 20ZM294-320h306L294-626v306ZM158-184v-504h28v476h476v28H158Zm291-287Zm92-61Z"/>
    </Icon>
  );
});

IconMaterialAdGroupOffW100.displayName = 'AmauiIconMaterialAdGroupOffW100';

export default IconMaterialAdGroupOffW100;
