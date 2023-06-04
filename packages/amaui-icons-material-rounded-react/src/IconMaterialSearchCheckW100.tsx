import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSearchCheckW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SearchCheckW100'

      short_name='SearchCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.925 10.275 11.175 8q.1-.1.238-.1.137 0 .262.125.1.1.1.237 0 .138-.1.238l-2.35 2.35q-.175.175-.4.175-.225 0-.4-.175l-1.2-1.2q-.1-.1-.1-.238 0-.137.1-.237.1-.1.25-.1t.25.1ZM19.7 19.65q-.125.125-.25.125t-.25-.125l-6-6q-.75.65-1.725 1Q10.5 15 9.55 15q-2.3 0-3.9-1.6t-1.6-3.9q0-2.3 1.6-3.9T9.55 4q2.3 0 3.9 1.6t1.6 3.9q0 1.025-.375 2-.375.975-.975 1.65l6 6q.05.05.075.112.025.063.025.125 0 .063-.025.138-.025.075-.075.125ZM9.55 14.3q2.025 0 3.413-1.388Q14.35 11.525 14.35 9.5t-1.387-3.413Q11.575 4.7 9.55 4.7T6.138 6.087Q4.75 7.475 4.75 9.5t1.388 3.412Q7.525 14.3 9.55 14.3Z"/>
    </Icon>
  );
});

IconMaterialSearchCheckW100.displayName = 'AmauiIconMaterialSearchCheckW100';

export default IconMaterialSearchCheckW100;
