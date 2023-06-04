import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSaveW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SaveW100'

      short_name='Save'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h10.025q.3 0 .588.125.287.125.487.325l2.35 2.35q.2.2.325.488.125.287.125.587V18.2q0 .65-.425 1.075-.425.425-1.075.425ZM19 7.85 16.15 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19h12.4q.35 0 .575-.225Q19 18.55 19 18.2Zm-7 8.25q.7 0 1.2-.5t.5-1.2q0-.7-.5-1.2t-1.2-.5q-.7 0-1.2.5t-.5 1.2q0 .7.5 1.2t1.2.5ZM7.75 9.7h5.45q.325 0 .538-.213.212-.212.212-.537v-1.2q0-.325-.212-.537Q13.525 7 13.2 7H7.75q-.325 0-.537.213Q7 7.425 7 7.75v1.2q0 .325.213.537.212.213.537.213ZM5 7.85V19 5Z"/>
    </Icon>
  );
});

IconMaterialSaveW100.displayName = 'AmauiIconMaterialSaveW100';

export default IconMaterialSaveW100;
