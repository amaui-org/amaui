import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAltRoute = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltRoute'

      short_name='AltRoute'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 22v-5q0-1.4-.425-2.075-.425-.675-1.125-1.325l1.425-1.425q.3.275.575.587.275.313.55.663.35-.475.713-.838.362-.362.737-.712.95-.875 1.725-2.025.775-1.15.825-4.025L14.425 7.4 13 6l4-4 4 4-1.4 1.4L18 5.825q-.05 3.575-1.1 5.087-1.05 1.513-2.1 2.463-.8.725-1.3 1.412-.5.688-.5 2.213v5ZM6.2 8.175q-.1-.5-.138-1.1-.037-.6-.062-1.25L4.4 7.4 3 6l4-4 4 4-1.425 1.4L8 5.85q0 .525.05.988.05.462.1.862Zm2.15 4.4q-.5-.525-.962-1.225-.463-.7-.813-1.725L8.5 9.15q.25.675.575 1.15.325.475.7.85Z"/>
    </Icon>
  );
});

IconMaterialAltRoute.displayName = 'AmauiIconMaterialAltRoute';

export default IconMaterialAltRoute;
