import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPropaneTankFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneTankFilled'

      short_name='PropaneTank'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 13v-3q0-1.425.85-2.475T7 6.125V2h10v4.125q1.3.35 2.15 1.4Q20 8.575 20 10v3Zm5-7h2q0-.425.288-.713Q11.575 5 12 5t.713.287Q13 5.575 13 6h2V4H9ZM8 22q-1.65 0-2.825-1.175Q4 19.65 4 18v-3h16v3q0 1.65-1.175 2.825Q17.65 22 16 22Z"/>
    </Icon>
  );
});

IconMaterialPropaneTankFilled.displayName = 'AmauiIconMaterialPropaneTankFilled';

export default IconMaterialPropaneTankFilled;
