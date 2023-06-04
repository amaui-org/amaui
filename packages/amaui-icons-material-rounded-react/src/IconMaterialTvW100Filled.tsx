import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvW100Filled'

      short_name='Tv'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.05 19.7q-.325 0-.537-.213-.213-.212-.213-.537V17.7H4.8q-.625 0-1.063-.438Q3.3 16.825 3.3 16.2V5.8q0-.625.437-1.063Q4.175 4.3 4.8 4.3h14.4q.625 0 1.063.437.437.438.437 1.063v10.4q0 .625-.437 1.062-.438.438-1.063.438h-4.5v1.25q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialTvW100Filled.displayName = 'AmauiIconMaterialTvW100Filled';

export default IconMaterialTvW100Filled;
