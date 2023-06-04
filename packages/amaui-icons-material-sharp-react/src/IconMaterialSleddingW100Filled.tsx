import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSleddingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SleddingW100Filled'

      short_name='Sledding'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.95 6.1q-.65 0-1.125-.475T10.35 4.5q0-.65.475-1.125T11.95 2.9q.65 0 1.125.475T13.55 4.5q0 .65-.475 1.125T11.95 6.1Zm7.125 16.5q-.425 0-.675-.05-.25-.05-.5-.125L1.45 17.05l.225-.65 3.975 1.275.7-2.175-3.95-1.275.225-.65 1.975.675V9.9l5.15-2.125q.125-.05.25-.075.125-.025.275-.025.8 0 1.163.513.362.512.087 1.387L10.25 13.35l3.8-.6 2.75 5.425 1.8.6-.225.65-3.3-1.075-.725 2.175 3.7 1.2q.25.075.463.125.212.05.562.05 1.2 0 1.987-.788.788-.787.788-1.987 0-1.05-.45-1.712-.45-.663-1.25-1.038l.25-.65q.95.425 1.55 1.313.6.887.6 2.087 0 1.475-1 2.475t-2.475 1Zm-11.4-7.375 1.25-6.35-3.625 1.5v4.1Zm6 5.1.725-2.2L7 15.75l-.7 2.175Zm2.2-2.45-1.925-3.8L8.7 15.55Z"/>
    </Icon>
  );
});

IconMaterialSleddingW100Filled.displayName = 'AmauiIconMaterialSleddingW100Filled';

export default IconMaterialSleddingW100Filled;
