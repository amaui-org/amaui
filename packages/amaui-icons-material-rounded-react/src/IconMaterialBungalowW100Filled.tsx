import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBungalowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowW100Filled'

      short_name='Bungalow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 12.6 12 12.6t-.487.212q-.213.213-.213.488t.213.487Q11.725 14 12 14Zm-2.95 5.7q-.325 0-.538-.213-.212-.212-.212-.537v-6.225L7.25 14.4q-.075.125-.212.15-.138.025-.263-.05-.125-.075-.15-.213-.025-.137.05-.262l4.675-7.55q.125-.175.3-.262.175-.088.35-.088.2 0 .35.088.15.087.275.262l4.7 7.55q.075.125.038.262-.038.138-.163.213-.125.075-.262.05-.138-.025-.213-.15L15.7 12.75v6.2q0 .325-.212.537-.213.213-.538.213H12.7V17q0-.275-.212-.487-.213-.213-.488-.213-.3 0-.5.213-.2.212-.2.487v2.7Z"/>
    </Icon>
  );
});

IconMaterialBungalowW100Filled.displayName = 'AmauiIconMaterialBungalowW100Filled';

export default IconMaterialBungalowW100Filled;
