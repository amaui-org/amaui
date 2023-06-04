import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFitScreenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FitScreenFilled'

      short_name='FitScreen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 9V6h-3V4h5v5ZM2 9V4h5v2H4v3Zm15 11v-2h3v-3h2v5ZM2 20v-5h2v3h3v2Zm4-4V8h12v8Z"/>
    </Icon>
  );
});

IconMaterialFitScreenFilled.displayName = 'AmauiIconMaterialFitScreenFilled';

export default IconMaterialFitScreenFilled;
