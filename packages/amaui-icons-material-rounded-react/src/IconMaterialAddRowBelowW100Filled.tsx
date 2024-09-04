import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddRowBelowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddRowBelowW100Filled'

      short_name='AddRowBelow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.96-132q-5.96 0-9.96-4.02-4-4.03-4-9.98v-66h-66q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66v-66q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM172-531v-237q0-24.75 17.63-42.38Q207.25-828 232-828h496q24.75 0 42.38 17.62Q788-792.75 788-768v237H172Zm60 319q-24.75 0-42.37-17.63Q172-247.25 172-272v-231h616v231q0 24.75-17.62 42.37Q752.75-212 728-212h-41q-5.62 0-9.31-4-3.69-4-3.69-10 0-80.51-56.26-137.26Q561.48-420 480-420q-81.48 0-137.74 56.74Q286-306.51 286-226q0 5.6-3.61 9.8-3.61 4.2-9.39 4.2h-41Z"/>
    </Icon>
  );
});

IconMaterialAddRowBelowW100Filled.displayName = 'AmauiIconMaterialAddRowBelowW100Filled';

export default IconMaterialAddRowBelowW100Filled;
