import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPlayForWorkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PlayForWorkFilled'

      short_name='PlayForWork'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-2.225 0-3.875-1.387Q6.475 17.225 6.1 15.1q-.075-.425.225-.763.3-.337.8-.337.35 0 .613.25.262.25.362.625.3 1.35 1.388 2.238Q10.575 18 12 18t2.513-.887q1.087-.888 1.387-2.238.1-.375.375-.625T16.9 14q.475 0 .775.337.3.338.225.763-.375 2.125-2.025 3.513Q14.225 20 12 20Zm0-5.45q-.2 0-.375-.063-.175-.062-.325-.212l-2.6-2.6q-.3-.3-.3-.7 0-.4.3-.7.3-.3.713-.3.412 0 .712.3l.875.875V6q0-.425.288-.713Q11.575 5 12 5t.713.287Q13 5.575 13 6v5.15l.9-.9q.275-.275.7-.275.425 0 .7.3.3.275.288.7-.013.425-.288.7l-2.6 2.6q-.15.15-.325.212-.175.063-.375.063Z"/>
    </Icon>
  );
});

IconMaterialPlayForWorkFilled.displayName = 'AmauiIconMaterialPlayForWorkFilled';

export default IconMaterialPlayForWorkFilled;
