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
      <path d="M10.6 18.25q.975.8 2.113.388Q13.85 18.225 14 16.95q.125-1.175-.725-1.737-.85-.563-1.275-1.463-.125.35-.125.65 0 .3.075.65.075.425.175.8.1.375.025.8-.125.45-.55.925-.425.475-1 .675ZM4 20.7q-.275 0-.487-.213Q3.3 20.275 3.3 20V4q0-.275.213-.488Q3.725 3.3 4 3.3h16q.275 0 .488.212.212.213.212.488v16q0 .275-.212.487-.213.213-.488.213Zm8.05-9.575q.35.825.95 1.525t1.55 1.4q.575.45.863 1.025.287.575.287 1.225 0 .8-.362 1.6-.363.8-1.188 1.4h2.2q.275 0 .513.213.237.212.237.487H20V4H4v16h2.9q0-.275.238-.487.237-.213.512-.213h2.45q-.8-.525-1.3-1.387-.5-.863-.5-1.663 0-1.8.863-3.113.862-1.312 2.162-2.262.2-.15.4-.088.2.063.325.338Z"/>
    </Icon>
  );
});

IconMaterialFireplaceW100Filled.displayName = 'AmauiIconMaterialFireplaceW100Filled';

export default IconMaterialFireplaceW100Filled;
