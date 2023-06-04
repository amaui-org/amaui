import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffW100Filled'

      short_name='TvOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.6 16.775 8.125 4.3H19.2q.65 0 1.075.425.425.425.425 1.075v10.4q0 .125-.025.275-.025.15-.075.3ZM5.3 4.3v1L2.85 2.85q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125L21.2 20.2q.1.1.112.238.013.137-.112.262t-.25.125q-.125 0-.25-.125l-3-3h-2.95v1.25q0 .325-.212.537-.213.213-.538.213h-3.95q-.325 0-.537-.213-.213-.212-.213-.537V17.7H4.8q-.65 0-1.075-.425Q3.3 16.85 3.3 16.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3Z"/>
    </Icon>
  );
});

IconMaterialTvOffW100Filled.displayName = 'AmauiIconMaterialTvOffW100Filled';

export default IconMaterialTvOffW100Filled;
