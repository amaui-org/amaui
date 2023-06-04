import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEarbudsBatteryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsBatteryW100'

      short_name='EarbudsBattery'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.85 17.35v-9.9h1.9v-.7h.7v.7h1.9v9.9Zm.7-.7h3.1-3.1Zm-11.925.7q-1.25 0-2.112-.862-.863-.863-.863-2.113V6.75h3.2v3.2h-2.5v4.425q0 .95.663 1.612.662.663 1.612.663.95 0 1.613-.663.662-.662.662-1.612v-4.65q0-1.25.862-2.113.863-.862 2.113-.862t2.113.85q.862.85.862 2.125v7.625h-3.2v-3.2h2.5V9.725q0-.95-.662-1.613-.663-.662-1.613-.662t-1.613.662Q8.6 8.775 8.6 9.725v4.65q0 1.25-.863 2.113-.862.862-2.112.862Zm11.925-.7h3.1v-8.5h-3.1Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBatteryW100.displayName = 'AmauiIconMaterialEarbudsBatteryW100';

export default IconMaterialEarbudsBatteryW100;
