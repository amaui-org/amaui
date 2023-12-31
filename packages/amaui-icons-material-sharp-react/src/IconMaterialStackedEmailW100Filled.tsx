import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedEmailW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedEmailW100Filled'

      short_name='StackedEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-292v-508h668v508H200ZM92-184v-404h28v376h602v28H92Zm442-326 306-230v-32L534-542 228-772v32l306 230Z"/>
    </Icon>
  );
});

IconMaterialStackedEmailW100Filled.displayName = 'AmauiIconMaterialStackedEmailW100Filled';

export default IconMaterialStackedEmailW100Filled;
