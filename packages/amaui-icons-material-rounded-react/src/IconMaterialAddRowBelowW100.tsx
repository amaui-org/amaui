import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowBelowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowBelowW100'

      short_name='AddRowBelow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-531v-237q0-14-9-23t-23-9H232q-14 0-23 9t-9 23v237h560ZM232-212q-24.75 0-42.37-17.63Q172-247.25 172-272v-496q0-24.75 17.63-42.38Q207.25-828 232-828h496q24.75 0 42.38 17.62Q788-792.75 788-768v496q0 24.75-17.62 42.37Q752.75-212 728-212h-40q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h40q14 0 23-9t9-23v-231H200v231q0 14 9 23t23 9h40q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-40Zm247.96 80q-5.96 0-9.96-4.02-4-4.03-4-9.98v-66h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-66q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02Zm.04-371Zm0-28v28-28Zm0 0Z"/>
    </Icon>
  );
});

IconMaterialAddRowBelowW100.displayName = 'AmauiIconMaterialAddRowBelowW100';

export default IconMaterialAddRowBelowW100;
