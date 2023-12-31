import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOdtW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OdtW100'

      short_name='Odt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-376h128v-208H216v208Zm28-28v-152h72v152h-72Zm172 28h106l22-23v-163l-22-22H416v208Zm28-28v-152h72v152h-72Zm212 28h28v-180h50v-28H606v28h50v180ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialOdtW100.displayName = 'AmauiIconMaterialOdtW100';

export default IconMaterialOdtW100;
