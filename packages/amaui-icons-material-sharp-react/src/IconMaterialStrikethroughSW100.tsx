import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStrikethroughSW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StrikethroughSW100'

      short_name='StrikethroughS'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.15 19.2q-1.55 0-2.725-.8T7.65 16.2l.65-.275q.525 1.125 1.475 1.85.95.725 2.375.725 1.35 0 2.55-.725 1.2-.725 1.2-2.275 0-.75-.187-1.225-.188-.475-.563-.925H16q.275.3.438.85.162.55.162 1.3 0 1.775-1.337 2.737-1.338.963-3.113.963Zm-9.5-7.85v-.7h18.7v.7Zm9.4-6.6q1.25 0 2.125.5t1.55 1.55l-.625.3q-.425-.675-1.187-1.162-.763-.488-1.863-.488-1.7 0-2.625.975T8.7 8.65H8q-.225-1.475.913-2.687Q10.05 4.75 12.05 4.75Z"/>
    </Icon>
  );
});

IconMaterialStrikethroughSW100.displayName = 'AmauiIconMaterialStrikethroughSW100';

export default IconMaterialStrikethroughSW100;
