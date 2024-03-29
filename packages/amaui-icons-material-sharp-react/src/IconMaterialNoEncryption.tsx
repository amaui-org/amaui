import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNoEncryption = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NoEncryption'

      short_name='NoEncryption'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m20 17.15-2-2V10h-5.15l-2-2H15V6q0-1.25-.863-2.125Q13.275 3 12.025 3t-2.1.862q-.85.863-.85 2.138v.225L7.25 4.4q.55-1.525 1.875-2.462Q10.45 1 12.025 1 14.1 1 15.55 2.462 17 3.925 17 6v2h3Zm.5 6.15L19.2 22H4V8.1h1.3L.7 3.5l1.4-1.4 19.8 19.8ZM17.15 20l-3.675-3.725q-.275.275-.637.425-.363.15-.788.15-.825 0-1.412-.588-.588-.587-.588-1.412 0-.425.15-.788.15-.362.425-.637L7.15 10H6v10Zm-5-5Zm3.275-2.425Z"/>
    </Icon>
  );
});

IconMaterialNoEncryption.displayName = 'AmauiIconMaterialNoEncryption';

export default IconMaterialNoEncryption;
