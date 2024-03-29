import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFamilyHistory = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHistory'

      short_name='FamilyHistory'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 22.5q-1.575 0-2.662-1.087Q8.25 20.325 8.25 18.75q0-1.3.775-2.288.775-.987 1.975-1.337V13H5V9H2.5V2h7v7H7v2h10V8.875q-1.2-.35-1.975-1.338-.775-.987-.775-2.287 0-1.575 1.088-2.663Q16.425 1.5 18 1.5t2.663 1.087Q21.75 3.675 21.75 5.25q0 1.3-.775 2.287Q20.2 8.525 19 8.875V13h-6v2.125q1.2.35 1.975 1.337.775.988.775 2.288 0 1.575-1.087 2.663Q13.575 22.5 12 22.5ZM18 7q.725 0 1.238-.513.512-.512.512-1.237 0-.725-.512-1.238Q18.725 3.5 18 3.5t-1.237.512q-.513.513-.513 1.238t.513 1.237Q17.275 7 18 7ZM4.5 7h3V4h-3ZM12 20.5q.725 0 1.238-.512.512-.513.512-1.238t-.512-1.238Q12.725 17 12 17t-1.238.512q-.512.513-.512 1.238t.512 1.238q.513.512 1.238.512Zm-6-15Zm12-.25Zm-6 13.5Z"/>
    </Icon>
  );
});

IconMaterialFamilyHistory.displayName = 'AmauiIconMaterialFamilyHistory';

export default IconMaterialFamilyHistory;
