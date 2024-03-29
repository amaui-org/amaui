import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoEncryptionFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryptionFilled'

      short_name='NoEncryption'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 17.15 10.85 8H15V6q0-1.25-.863-2.125Q13.275 3 12.025 3t-2.1.862q-.85.863-.85 2.138v.225L7.25 4.4q.55-1.525 1.875-2.462Q10.45 1 12.025 1 14.1 1 15.55 2.462 17 3.925 17 6v2h3Zm.5 6.15L19.2 22H4V8.1h1.3L.7 3.5l1.4-1.4 19.8 19.8Zm-9.9-9.85q-.275.275-.425.637-.15.363-.15.788 0 .825.588 1.413.587.587 1.412.587.425 0 .787-.15.363-.15.638-.425Z"/>
    </Icon>
  );
});

IconMaterialNoEncryptionFilled.displayName = 'AmauiIconMaterialNoEncryptionFilled';

export default IconMaterialNoEncryptionFilled;
