import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNewLabel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NewLabel'

      short_name='NewLabel'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon opacity=".3" points="12,17 12,13 9,13 9,10 5,10 5,7 15,7 18.55,12 15,17"/><path d="M21,12l-4.37,6.16C16.26,18.68,15.65,19,15,19h-3l0-2h3l3.55-5L15,7H5v3H3V7c0-1.1,0.9-2,2-2h10c0.65,0,1.26,0.31,1.63,0.84 L21,12z M10,15H7v-3H5v3H2v2h3v3h2v-3h3V15z"/>
    </Icon>
  );
});

IconMaterialNewLabel.displayName = 'AmauiIconMaterialNewLabel';

export default IconMaterialNewLabel;
