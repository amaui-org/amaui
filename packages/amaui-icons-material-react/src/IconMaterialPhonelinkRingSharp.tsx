import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPhonelinkRingSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhonelinkRingSharp'
      short_name='PhonelinkRing'

      {...props}
    >
      <path d="M20.8 17.3 19.4 15.9Q20.175 15.125 20.6 14.125Q21.025 13.125 21.025 12Q21.025 10.875 20.6 9.875Q20.175 8.875 19.4 8.1L20.8 6.7Q21.875 7.75 22.45 9.125Q23.025 10.5 23.025 12Q23.025 13.5 22.45 14.875Q21.875 16.25 20.8 17.3ZM18.35 14.85 16.9 13.4Q17.2 13.125 17.363 12.762Q17.525 12.4 17.525 12Q17.525 11.6 17.363 11.238Q17.2 10.875 16.9 10.6L18.35 9.15Q18.925 9.725 19.225 10.462Q19.525 11.2 19.525 12Q19.525 12.8 19.225 13.537Q18.925 14.275 18.35 14.85ZM7 21H17V20H7ZM7 4H17V3H7ZM5 23V1H19V7H17V6H7V18H17V17H19V23ZM7 4V3V4ZM7 21V20V21Z"/>
    </Icon>
  );
});

IconMaterialPhonelinkRingSharp.displayName = 'AmauiIconMaterialPhonelinkRingSharp';

export default IconMaterialPhonelinkRingSharp;
