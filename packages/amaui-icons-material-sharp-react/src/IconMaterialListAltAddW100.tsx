import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListAltAddW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltAddW100'

      short_name='ListAltAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M702 870H582v-28h120V722h28v120h120v28H730v120h-28V870Zm-502-14V296v560Zm-28 28V268h616v387q-7-2-13.5-4t-14.5-4V296H200v560h302q0 7.35.462 14.35.461 7 1.538 13.65H172Zm154.07-132q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314 696 306 704.07t-8 20q0 11.93 8.07 19.93t20 8Zm0-148q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314 548 306 556.07t-8 20q0 11.93 8.07 19.93t20 8Zm0-148q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314 400 306 408.07t-8 20q0 11.93 8.07 19.93t20 8ZM450 590h208v-28H450v28Zm0-148h208v-28H450v28Zm0 296h88q5-8 10.5-14.5T560 710H450v28Z"/>
    </Icon>
  );
});

IconMaterialListAltAddW100.displayName = 'AmauiIconMaterialListAltAddW100';

export default IconMaterialListAltAddW100;
