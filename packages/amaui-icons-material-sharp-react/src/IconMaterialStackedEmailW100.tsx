import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedEmailW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedEmailW100'

      short_name='StackedEmail'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-292v-508h668v508H200Zm334-218L228-740v420h612v-420L534-510Zm0-32 306-230H228l306 230ZM92-184v-404h28v376h602v28H92Zm748-588H228h612Z"/>
    </Icon>
  );
});

IconMaterialStackedEmailW100.displayName = 'AmauiIconMaterialStackedEmailW100';

export default IconMaterialStackedEmailW100;
