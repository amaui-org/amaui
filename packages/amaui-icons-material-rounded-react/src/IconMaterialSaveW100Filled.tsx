import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSaveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveW100Filled'

      short_name='Save'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h10.025q.3 0 .575.112.275.113.5.338l2.35 2.35q.225.225.338.5.112.275.112.575V18.2q0 .65-.425 1.075-.425.425-1.075.425Zm6.2-3.6q.7 0 1.2-.5t.5-1.2q0-.7-.5-1.2t-1.2-.5q-.7 0-1.2.5t-.5 1.2q0 .7.5 1.2t1.2.5ZM7.75 9.7h5.45q.325 0 .538-.213.212-.212.212-.537v-1.2q0-.325-.212-.537Q13.525 7 13.2 7H7.75q-.325 0-.537.213Q7 7.425 7 7.75v1.2q0 .325.213.537.212.213.537.213Z"/>
    </Icon>
  );
});

IconMaterialSaveW100Filled.displayName = 'AmauiIconMaterialSaveW100Filled';

export default IconMaterialSaveW100Filled;
