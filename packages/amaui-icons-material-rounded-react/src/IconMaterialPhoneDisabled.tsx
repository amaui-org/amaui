import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhoneDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneDisabled'

      short_name='PhoneDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.95 9q.425-.975.65-1.975.225-1 .35-2.025h-2.2l-.45 2.35ZM5 18.95q1.025-.075 2.025-.35 1-.275 1.975-.7l-1.65-1.65-2.35.5v2.2Zm12.05-4.65-1.4-1.4q.275-.3.75-1.037.475-.738.6-.963l-2.45-2.5q-.2-.2-.275-.438-.075-.237-.025-.462l.7-3.7q.075-.35.338-.575Q15.55 3 15.9 3H20q.45 0 .725.3.275.3.275.75 0 2.75-1.05 5.362-1.05 2.613-2.9 4.888ZM3.95 21q-.6 0-.775-.275Q3 20.45 3 20v-4.1q0-.35.225-.613.225-.262.575-.337l3.65-.75q.275-.05.513.025.237.075.437.275l2.5 2.5q.5-.3.975-.613.475-.312.925-.687L2.1 5q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l17 17q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275l-4.85-4.85q-2.225 1.8-4.887 2.825Q6.7 21 3.95 21Zm14-12ZM9 17.9Z"/>
    </Icon>
  );
});

IconMaterialPhoneDisabled.displayName = 'AmauiIconMaterialPhoneDisabled';

export default IconMaterialPhoneDisabled;
