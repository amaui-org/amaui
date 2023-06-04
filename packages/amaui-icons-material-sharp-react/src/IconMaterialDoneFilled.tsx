import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoneFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoneFilled'

      short_name='Done'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z"/>
    </Icon>
  );
});

IconMaterialDoneFilled.displayName = 'AmauiIconMaterialDoneFilled';

export default IconMaterialDoneFilled;
