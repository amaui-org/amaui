import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpeed12W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Speed12W100Filled'

      short_name='Speed12'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M331.96-306q-5.96 0-9.96-4.02-4-4.03-4-9.98v-274q0-14-9-23t-23-9h-34q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h34q24.75 0 42.38 17.62Q346-618.75 346-594v274q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM594-306q-24.75 0-42.37-17.63Q534-341.25 534-366v-68q0-26 17-43t43-17h68q14 0 23-9t9-23v-68q0-14-9-23t-23-9H548q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h114q26 0 43 17t17 43v68q0 26-17 43t-43 17h-68q-14 0-23 9t-9 23v68q0 14 9 23t23 9h114q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H594Zm-154.04 0q-5.96 0-9.96-4.04-4-4.03-4-10 0-5.96 4.04-9.96 4.03-4 10-4 5.96 0 9.96 4.04 4 4.03 4 10 0 5.96-4.04 9.96-4.03 4-10 4Z"/>
    </Icon>
  );
});

IconMaterialSpeed12W100Filled.displayName = 'AmauiIconMaterialSpeed12W100Filled';

export default IconMaterialSpeed12W100Filled;
