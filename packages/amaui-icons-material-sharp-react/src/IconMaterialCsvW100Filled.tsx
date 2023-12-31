import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCsvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CsvW100Filled'

      short_name='Csv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-376h128v-28H248v-152h100v-28H220v208Zm190 0h128v-118H438v-62h100v-28H410v118h100v62H410v28Zm240 0h44l60-208h-30l-52 180-52-180h-30l60 208ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialCsvW100Filled.displayName = 'AmauiIconMaterialCsvW100Filled';

export default IconMaterialCsvW100Filled;
