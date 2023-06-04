import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVerticalShadesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VerticalShadesFilled'

      short_name='VerticalShades'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 21v-2h2V3h16v16h2v2Zm8-2h4V5h-4Z"/>
    </Icon>
  );
});

IconMaterialVerticalShadesFilled.displayName = 'AmauiIconMaterialVerticalShadesFilled';

export default IconMaterialVerticalShadesFilled;
