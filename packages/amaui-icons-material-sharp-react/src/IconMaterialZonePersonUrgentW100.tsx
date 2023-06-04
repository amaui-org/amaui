import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialZonePersonUrgentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ZonePersonUrgentW100'

      short_name='ZonePersonUrgent'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M13.5 8.1q-.675 0-1.137-.462Q11.9 7.175 11.9 6.5q0-.675.463-1.138.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.138-.463.462-1.138.462Zm-1.2 8.1H9.6l1.05-5.4-3.3 1.375v3.175h-.7V11.7l4-1.65q.575-.225.85-.313.275-.087.5-.087.35 0 .65.187.3.188.5.513l1 1.6q.225.35.5.687.275.338.625.613l-.375.575q-.475-.4-.912-.925-.438-.525-.813-1.175Zm1.575 4.4 4.65-8.075L23.15 20.6Zm4.625-.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-.35-2h.7v-3.7h-.7ZM3.3 7V3.3H7V4H4v3Zm0 13.7V17H4v3h3v.7ZM20 7V4h-3v-.7h3.7V7Z"/>
    </Icon>
  );
});

IconMaterialZonePersonUrgentW100.displayName = 'AmauiIconMaterialZonePersonUrgentW100';

export default IconMaterialZonePersonUrgentW100;
