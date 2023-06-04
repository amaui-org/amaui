import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamWiredStandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWiredStandW100'

      short_name='NestCamWiredStand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.5 15.95q-1.25 0-2.125.862-.875.863-.875 2.138v1h6v-1q0-1.275-.863-2.138-.862-.862-2.137-.862ZM8 9.05q0 1.675 1.137 2.9 1.138 1.225 2.788 1.425l4.1.425V4.275l-4.1.425q-1.675.15-2.8 1.4Q8 7.35 8 9.05Zm8.2 11.6H8.8v-1.7q0-1.55 1.088-2.625 1.087-1.075 2.612-1.075.275 0 .538.037.262.038.537.113l.7-1.1-2.4-.225q-1.95-.2-3.262-1.637Q7.3 11 7.3 9.05t1.313-3.388q1.312-1.437 3.262-1.687l4.85-.45v11l-1.65-.15-.85 1.275q.875.475 1.425 1.338.55.862.55 1.962Zm-.175-11.625ZM12.5 19.95Z"/>
    </Icon>
  );
});

IconMaterialNestCamWiredStandW100.displayName = 'AmauiIconMaterialNestCamWiredStandW100';

export default IconMaterialNestCamWiredStandW100;
