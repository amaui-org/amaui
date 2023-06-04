import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrightness2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Brightness2W100'

      short_name='Brightness2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.85 4h-.525q-.25 0-.475.05 1.425 1.65 2.212 3.687.788 2.038.788 4.263t-.788 4.262Q9.275 18.3 7.85 19.95q.225.05.475.05h.525q3.325 0 5.663-2.337Q16.85 15.325 16.85 12t-2.337-5.663Q12.175 4 8.85 4Zm0-.7q1.8 0 3.388.687Q13.825 4.675 15 5.85t1.863 2.762Q17.55 10.2 17.55 12q0 1.8-.687 3.387-.688 1.588-1.863 2.763-1.175 1.175-2.762 1.862-1.588.688-3.388.688-.625 0-1.225-.075-.6-.075-1.175-.275 1.775-1.625 2.738-3.788.962-2.162.962-4.562 0-2.4-.962-4.563Q8.225 5.275 6.45 3.65q.575-.2 1.175-.275.6-.075 1.225-.075Zm2 8.7Z"/>
    </Icon>
  );
});

IconMaterialBrightness2W100.displayName = 'AmauiIconMaterialBrightness2W100';

export default IconMaterialBrightness2W100;
