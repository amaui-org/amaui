import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffW100'

      short_name='TvOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.6 16.775 20 16.2V5.8q0-.35-.225-.575Q19.55 5 19.2 5H8.825l-.7-.7H19.2q.65 0 1.075.425.425.425.425 1.075v10.4q0 .125-.025.275-.025.15-.075.3ZM5.3 4.3 6 5H4.8q-.3 0-.55.25Q4 5.5 4 5.8v10.4q0 .35.225.575Q4.45 17 4.8 17H17L2.85 2.85q-.1-.1-.113-.238-.012-.137.113-.262t.25-.125q.125 0 .25.125L21.2 20.2q.1.1.112.238.013.137-.112.262-.1.1-.237.1-.138 0-.263-.1l-3.05-3H14.7v1.25q0 .325-.212.537-.213.213-.538.213h-3.9q-.325 0-.537-.213-.213-.212-.213-.537V17.7H4.8q-.65 0-1.075-.425Q3.3 16.85 3.3 16.2V5.8q0-.65.425-1.075Q4.15 4.3 4.8 4.3Zm5.9 6.925Zm3.625-.25Z"/>
    </Icon>
  );
});

IconMaterialTvOffW100.displayName = 'AmauiIconMaterialTvOffW100';

export default IconMaterialTvOffW100;
