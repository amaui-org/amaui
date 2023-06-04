import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetTvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetTvW100Filled'

      short_name='ResetTv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537V17.7H4.8q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v4.85h-9.45L13.5 8.4q.1-.1.113-.238.012-.137-.113-.262t-.25-.125q-.125 0-.25.125l-2.575 2.575q-.125.125-.175.25-.05.125-.05.275 0 .15.05.275.05.125.175.25L13 14.1q.1.1.238.112.137.013.262-.112t.125-.25q0-.125-.125-.25l-2.25-2.25h9.45v4.85q0 .625-.437 1.062-.438.438-1.063.438h-4.5v1.25q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialResetTvW100Filled.displayName = 'AmauiIconMaterialResetTvW100Filled';

export default IconMaterialResetTvW100Filled;
