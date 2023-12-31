import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResponsiveLayout = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResponsiveLayout'

      short_name='ResponsiveLayout'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-520h200v-200h520v720H120Zm520-80h120v-560H400v120h240v440Zm-240 0h160v-360H400v360Zm-200 0h120v-360H200v360Zm440-440v80-80Zm-320 80Zm240 0Zm80-80Z"/>
    </Icon>
  );
});

IconMaterialResponsiveLayout.displayName = 'AmauiIconMaterialResponsiveLayout';

export default IconMaterialResponsiveLayout;
