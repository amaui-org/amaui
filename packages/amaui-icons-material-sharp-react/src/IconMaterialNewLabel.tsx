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
      <path d="M12 19v-2h3l3.55-5L15 7H5v3H3V5h13.05L21 12l-4.95 7Zm-.225-7ZM5 20v-3H2v-2h3v-3h2v3h3v2H7v3Z"/>
    </Icon>
  );
});

IconMaterialNewLabel.displayName = 'AmauiIconMaterialNewLabel';

export default IconMaterialNewLabel;
