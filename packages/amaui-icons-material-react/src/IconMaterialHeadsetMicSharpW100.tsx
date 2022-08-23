import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHeadsetMicSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadsetMicSharpW100'
      short_name='HeadsetMic'

      {...props}
    >
      <path d="M12 20.9V20.2H19V18.7H16.2V13.1H19V11Q19 8.1 16.95 6.05Q14.9 4 12 4Q9.1 4 7.05 6.05Q5 8.1 5 11V13.1H7.8V18.7H4.3V11Q4.3 9.4 4.9 8Q5.5 6.6 6.55 5.55Q7.6 4.5 9 3.9Q10.4 3.3 12 3.3Q13.6 3.3 15 3.9Q16.4 4.5 17.45 5.55Q18.5 6.6 19.1 8Q19.7 9.4 19.7 11V20.9ZM5 18H7.1V13.8H5ZM16.9 18H19V13.8H16.9ZM5 18H7.1ZM16.9 18H19Z"/>
    </Icon>
  );
});

IconMaterialHeadsetMicSharpW100.displayName = 'AmauiIconMaterialHeadsetMicSharpW100';

export default IconMaterialHeadsetMicSharpW100;
