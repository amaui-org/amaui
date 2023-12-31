import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOdtW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OdtW100Filled'

      short_name='Odt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M216-376h128v-208H216v208Zm28-28v-152h72v152h-72Zm172 28h106l22-23v-163l-22-22H416v208Zm28-28v-152h72v152h-72Zm212 28h28v-180h50v-28H606v28h50v180ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialOdtW100Filled.displayName = 'AmauiIconMaterialOdtW100Filled';

export default IconMaterialOdtW100Filled;
