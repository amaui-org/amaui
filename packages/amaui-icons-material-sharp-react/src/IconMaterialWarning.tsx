import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWarning = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Warning'

      short_name='Warning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 12.5ZM1 21 12 2l11 19Zm10-6h2v-5h-2Zm1 3q.425 0 .713-.288Q13 17.425 13 17t-.287-.712Q12.425 16 12 16t-.712.288Q11 16.575 11 17t.288.712Q11.575 18 12 18Zm-7.55 1h15.1L12 6Z"/>
    </Icon>
  );
});

IconMaterialWarning.displayName = 'AmauiIconMaterialWarning';

export default IconMaterialWarning;
