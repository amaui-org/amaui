import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShutterSpeedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShutterSpeedW100'

      short_name='ShutterSpeed'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 3v-.7h6V3Zm3 17.7q-1.6 0-3-.6t-2.45-1.65Q5.5 17.4 4.9 16q-.6-1.4-.6-3t.6-3q.6-1.4 1.65-2.45Q7.6 6.5 9 5.9q1.4-.6 3-.6 1.575 0 2.825.525 1.25.525 2.375 1.475L18.5 6l.5.5-1.3 1.3q.95 1.125 1.475 2.375.525 1.25.525 2.825 0 1.6-.612 3-.613 1.4-1.663 2.45-1.05 1.05-2.45 1.65-1.4.6-2.975.6Zm0-7.7Zm-.2-1.7h7q-.45-1.7-1.55-2.925Q16.15 7.15 14.6 6.5Zm-1.4 1 3.55-6.05q-1.775-.5-3.412-.1Q8.9 6.55 7.65 7.5ZM5.1 14h5.45L7.1 7.95q-1.125 1.175-1.7 2.725T5.1 14Zm4.3 5.5 2.75-4.8H5.2q.425 1.65 1.538 2.9Q7.85 18.85 9.4 19.5Zm.7.2q2.275.675 3.888.038Q15.6 19.1 16.35 18.5l-2.8-4.85Zm6.8-1.65q.45-.5 1.412-2.05.963-1.55.588-4h-5.5Z"/>
    </Icon>
  );
});

IconMaterialShutterSpeedW100.displayName = 'AmauiIconMaterialShutterSpeedW100';

export default IconMaterialShutterSpeedW100;
