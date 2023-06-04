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
      <path d="M3.3 6V3.8q0-.65.425-1.075Q4.15 2.3 4.8 2.3H7V3H4.8q-.3 0-.55.25Q4 3.5 4 3.8V6ZM7 19.7H4.8q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V16H4v2.2q0 .3.25.55.25.25.55.25H7ZM20 6V3.8q0-.3-.25-.55Q19.5 3 19.2 3H17v-.7h2.2q.65 0 1.075.425.425.425.425 1.075V6Zm-6.5 2.1q-.675 0-1.137-.462Q11.9 7.175 11.9 6.5q0-.675.463-1.138.462-.462 1.137-.462t1.138.462q.462.463.462 1.138 0 .675-.462 1.138-.463.462-1.138.462Zm-1.2 8.1H9.6l1.05-5.4-3.3 1.375v3.175h-.7V11.7l4-1.65q.575-.225.85-.313.275-.087.5-.087.35 0 .65.187.3.188.5.513l1 1.6q.225.35.5.687.275.338.625.613l-.375.575q-.475-.4-.912-.925-.438-.525-.813-1.175Zm2.2 4.4q-.1 0-.175-.05-.075-.05-.125-.15-.05-.075-.05-.175 0-.1.05-.175l4-6.975q.05-.1.137-.15.088-.05.188-.05t.175.05q.075.05.125.125l4 7q.05.075.05.175 0 .1-.05.175-.05.1-.137.15-.088.05-.188.05Zm4-.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1Zm-.35-2h.7v-3.7h-.7Z"/>
    </Icon>
  );
});

IconMaterialZonePersonUrgentW100.displayName = 'AmauiIconMaterialZonePersonUrgentW100';

export default IconMaterialZonePersonUrgentW100;
