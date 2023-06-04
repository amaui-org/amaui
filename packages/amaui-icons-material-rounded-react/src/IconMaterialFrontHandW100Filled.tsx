import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFrontHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FrontHandW100Filled'

      short_name='FrontHand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.7 22.1q-1.35 0-2.55-.45-1.2-.45-2.1-1.25-.9-.8-1.425-1.925T6.1 16V6.5q0-.45.3-.75t.75-.3q.45 0 .75.3t.3.75v4.8q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V3.75q0-.45.3-.75t.75-.3q.45 0 .75.3t.3.75v7.55q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V2.825q0-.45.288-.738.287-.287.737-.287t.738.287q.287.288.287.738V11.3q0 .15.1.25t.25.1q.15 0 .25-.1t.1-.25V5.125q0-.45.288-.738.287-.287.737-.287t.737.287q.288.288.288.738v8.225q-1.575.5-2.5 1.437-.925.938-1.3 2.388-.05.175.038.3.087.125.287.125.125 0 .213-.062.087-.063.112-.188.275-1.175 1.113-2.075.837-.9 2.212-1.275l.125-.05q.175-.075.287-.225.113-.15.113-.35V11.35q0-.45.3-.75t.75-.3q.45 0 .75.3t.3.75V16q0 1.35-.525 2.475T17.35 20.4q-.9.8-2.1 1.25-1.2.45-2.55.45Z"/>
    </Icon>
  );
});

IconMaterialFrontHandW100Filled.displayName = 'AmauiIconMaterialFrontHandW100Filled';

export default IconMaterialFrontHandW100Filled;
