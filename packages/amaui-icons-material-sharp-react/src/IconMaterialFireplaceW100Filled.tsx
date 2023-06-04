import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFireplaceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FireplaceW100Filled'

      short_name='Fireplace'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.6 18.25q.975.8 2.113.388Q13.85 18.225 14 16.95q.125-1.175-.725-1.737-.85-.563-1.275-1.463-.125.35-.125.65 0 .3.075.65.075.425.175.8.1.375.025.8-.125.45-.55.925-.425.475-1 .675ZM3.3 20.7V3.3h17.4v17.4ZM4 20h2.9v-.7h3.2q-.8-.525-1.3-1.387-.5-.863-.5-1.663 0-1 .275-1.838.275-.837.75-1.55.475-.712 1.125-1.3.65-.587 1.4-1.062.3 1.05.938 1.887.637.838 1.762 1.663.575.45.863 1.025.287.575.287 1.225 0 .8-.362 1.6-.363.8-1.188 1.4h2.95v.7H20V4H4Z"/>
    </Icon>
  );
});

IconMaterialFireplaceW100Filled.displayName = 'AmauiIconMaterialFireplaceW100Filled';

export default IconMaterialFireplaceW100Filled;
