import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialModeCoolOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeCoolOff'

      short_name='ModeCoolOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.95 16.95 15 13h-1.125L11 10.125V9L7.05 5.05q-.3-.3-.3-.713 0-.412.3-.712t.7-.3q.4 0 .7.3L11 6.175V3q0-.425.288-.713Q11.575 2 12 2t.713.287Q13 2.575 13 3v3.175l2.55-2.55q.3-.3.7-.3.4 0 .7.3.3.3.3.712 0 .413-.3.713L13 9v2h2l3.95-3.95q.3-.3.713-.3.412 0 .712.3t.3.7q0 .4-.3.7L17.825 11H21q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13h-3.175l2.55 2.55q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3Zm.225 7.05L13 17.825V21q0 .425-.287.712Q12.425 22 12 22t-.712-.288Q11 21.425 11 21v-3.175l-2.55 2.55q-.3.3-.7.3-.4 0-.7-.3-.3-.3-.3-.712 0-.413.3-.713l3.55-3.55-2-2-3.55 3.55q-.3.3-.712.3-.413 0-.713-.3t-.3-.7q0-.4.3-.7L6.175 13H3q-.425 0-.712-.288Q2 12.425 2 12t.288-.713Q2.575 11 3 11h3.175l-5.4-5.4L2.2 4.175l18.4 18.4Z"/>
    </Icon>
  );
});

IconMaterialModeCoolOff.displayName = 'AmauiIconMaterialModeCoolOff';

export default IconMaterialModeCoolOff;
