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
      <path d="M17.55 17.35q-.3 0-.5-.2t-.2-.5v-8.5q0-.3.2-.5t.5-.2h1.2v-.3q0-.175.087-.288.088-.112.263-.112.175 0 .263.112.087.113.087.288v.3h1.2q.3 0 .5.2t.2.5v8.5q0 .3-.2.5t-.5.2Zm0-.7h3.1-3.1Zm-11.925.7q-1.25 0-2.112-.862-.863-.863-.863-2.113V8.35q0-.675.463-1.137.462-.463 1.137-.463t1.138.463q.462.462.462 1.137t-.462 1.137q-.463.463-1.138.463-.225 0-.462-.075Q3.55 9.8 3.35 9.65v4.725q0 .95.663 1.612.662.663 1.612.663.95 0 1.613-.663.662-.662.662-1.612v-4.65q0-1.25.862-2.113.863-.862 2.113-.862t2.113.85q.862.85.862 2.125v6.025q0 .675-.462 1.138-.463.462-1.138.462-.675 0-1.137-.462-.463-.463-.463-1.138 0-.675.463-1.138.462-.462 1.137-.462.225 0 .463.075.237.075.437.225V9.725q0-.95-.662-1.613-.663-.662-1.613-.662t-1.613.662Q8.6 8.775 8.6 9.725v4.65q0 1.25-.863 2.113-.862.862-2.112.862Zm11.925-.7h3.1v-8.5h-3.1Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBatteryW100.displayName = 'AmauiIconMaterialEarbudsBatteryW100';

export default IconMaterialEarbudsBatteryW100;
