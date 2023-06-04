import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAutoAwesomeMosaicW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoAwesomeMosaicW100'

      short_name='AutoAwesomeMosaic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 19.7H5.8q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3H11Zm-.7-.7V5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19Zm2.7-8V4.3h5.2q.65 0 1.075.425.425.425.425 1.075V11Zm.7-.7H19V5.8q0-.35-.225-.575Q18.55 5 18.2 5h-4.5Zm-.7 9.4V13h6.7v5.2q0 .65-.425 1.075-.425.425-1.075.425Zm.7-.7h4.5q.35 0 .575-.225Q19 18.55 19 18.2v-4.5h-5.3Zm-3.4-7Zm3.4-1.7Zm0 3.4Z"/>
    </Icon>
  );
});

IconMaterialAutoAwesomeMosaicW100.displayName = 'AmauiIconMaterialAutoAwesomeMosaicW100';

export default IconMaterialAutoAwesomeMosaicW100;
