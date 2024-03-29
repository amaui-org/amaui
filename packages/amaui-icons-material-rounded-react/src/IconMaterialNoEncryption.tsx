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
      <path d="m20 17.15-2-2V10h-5.15l-2-2H15V6q0-1.25-.863-2.125Q13.275 3 12.025 3t-2.1.862q-.85.863-.85 2.138v.225L7.25 4.4q.55-1.525 1.875-2.462Q10.45 1 12.025 1 14.1 1 15.55 2.462 17 3.925 17 6v2h1q.825 0 1.413.587Q20 9.175 20 10ZM6 22q-.825 0-1.412-.587Q4 20.825 4 20V10q0-.625.363-1.15.362-.525.937-.75L1.4 4.2q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-.85-.85q-.275.125-.5.188Q18.225 22 18 22Zm11.15-2-3.675-3.725q-.275.275-.637.425-.363.15-.788.15-.825 0-1.412-.588-.588-.587-.588-1.412 0-.425.15-.788.15-.362.425-.637L7.15 10H6v10Zm-5-5Zm3.275-2.425Z"/>
    </Icon>
  );
});

IconMaterialNoEncryption.displayName = 'AmauiIconMaterialNoEncryption';

export default IconMaterialNoEncryption;
