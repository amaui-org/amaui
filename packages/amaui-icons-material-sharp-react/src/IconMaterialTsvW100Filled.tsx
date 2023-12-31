import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTsvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TsvW100Filled'

      short_name='Tsv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-376h28v-180h50v-28H216v28h50v180Zm130 0h128v-118H424v-62h100v-28H396v118h100v62H396v28Zm242 0h44l60-208h-30l-52 180-52-180h-30l60 208ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialTsvW100Filled.displayName = 'AmauiIconMaterialTsvW100Filled';

export default IconMaterialTsvW100Filled;
