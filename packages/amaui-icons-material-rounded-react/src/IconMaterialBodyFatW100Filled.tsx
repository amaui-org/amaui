import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBodyFatW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BodyFatW100Filled'

      short_name='BodyFat'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.525 19-11.35-5.65q-.425-.2-.625-.575-.2-.375-.2-.775t.2-.762q.2-.363.625-.563l11.35-5.65q.375-.2.763-.175.387.025.712.225.325.2.512.525.188.325.188.75v2.3h.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2q-.15 0-.25-.1T17 9q0-.15.1-.25t.25-.1H18V6.4q0-.45-.375-.688-.375-.237-.775-.037l-4 1.975q.675.975 1.088 2.075.412 1.1.412 2.275 0 1.2-.412 2.312-.413 1.113-1.088 2.088l3.975 1.975q.4.2.775-.038.375-.237.375-.687v-2.3h-.625q-.15 0-.25-.1T17 15q0-.15.1-.25t.25-.1h2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-.65v2.3q0 .425-.188.75-.187.325-.512.525t-.712.238q-.388.037-.763-.163ZM12.2 16.075q.65-.9 1.05-1.925t.4-2.15q0-1.1-.388-2.125-.387-1.025-1.037-1.9l-6.725 3.3q-.45.225-.45.725t.45.725Z"/>
    </Icon>
  );
});

IconMaterialBodyFatW100Filled.displayName = 'AmauiIconMaterialBodyFatW100Filled';

export default IconMaterialBodyFatW100Filled;
