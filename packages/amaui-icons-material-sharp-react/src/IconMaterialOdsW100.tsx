import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOdsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OdsW100'

      short_name='Ods'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-376h128v-208H216v208Zm28-28v-152h72v152h-72Zm172 28h106l22-23v-163l-22-22H416v208Zm28-28v-152h72v152h-72Zm172 28h128v-118H644v-62h100v-28H616v118h100v62H616v28ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialOdsW100.displayName = 'AmauiIconMaterialOdsW100';

export default IconMaterialOdsW100;
