import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialColorize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Colorize'

      short_name='Colorize'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20v-3.325q0-.2.075-.387.075-.188.225-.338l8.65-8.65-.75-.75q-.3-.3-.287-.712.012-.413.312-.713t.713-.3q.412 0 .712.3l1.175 1.2L16.9 3.25q.275-.275.7-.275.425 0 .7.275l2.4 2.4q.275.275.275.7 0 .425-.275.7l-3.075 3.075 1.25 1.25q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3l-.75-.725-8.65 8.65q-.15.15-.337.225-.188.075-.388.075Zm1-2h1.95l8.3-8.35-1.9-1.9L5 17.05ZM16.175 8.75l2.4-2.4-.975-.975-2.4 2.4Zm0 0-.975-.975.975.975Z"/>
    </Icon>
  );
});

IconMaterialColorize.displayName = 'AmauiIconMaterialColorize';

export default IconMaterialColorize;
