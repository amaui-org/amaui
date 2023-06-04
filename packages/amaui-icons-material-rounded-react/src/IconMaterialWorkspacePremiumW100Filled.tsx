import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkspacePremiumW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkspacePremiumW100Filled'

      short_name='WorkspacePremium'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.975 12.375 12 11.6l1.025.775q.225.2.463.025.237-.175.162-.45l-.4-1.3.95-.675q.25-.175.15-.45t-.375-.275H12.75L12.375 8Q12.3 7.725 12 7.725T11.625 8l-.375 1.25h-1.225q-.275 0-.375.275-.1.275.15.45l.95.675-.4 1.3q-.075.275.162.45.238.175.463-.025Zm-2.725 8.35q-.35.125-.65-.112-.3-.238-.3-.613v-5.25q-.95-.9-1.475-2.125Q5.3 11.4 5.3 10q0-2.8 1.95-4.75Q9.2 3.3 12 3.3t4.75 1.95Q18.7 7.2 18.7 10q0 1.4-.525 2.625T16.7 14.75V20q0 .375-.3.613-.3.237-.65.112L12 19.65ZM12 16q2.5 0 4.25-1.75T18 10q0-2.5-1.75-4.25T12 4Q9.5 4 7.75 5.75T6 10q0 2.5 1.75 4.25T12 16Z"/>
    </Icon>
  );
});

IconMaterialWorkspacePremiumW100Filled.displayName = 'AmauiIconMaterialWorkspacePremiumW100Filled';

export default IconMaterialWorkspacePremiumW100Filled;
