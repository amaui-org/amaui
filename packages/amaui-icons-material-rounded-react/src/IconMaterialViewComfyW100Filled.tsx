import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewComfyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewComfyW100Filled'

      short_name='ViewComfy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20.7 10.9q0 .325-.212.538-.213.212-.538.212H4.05q-.325 0-.537-.212-.213-.213-.213-.538V6.05q0-.325.213-.538.212-.212.537-.212h15.9q.325 0 .538.212.212.213.212.538ZM9.95 18.7q-.325 0-.537-.213-.213-.212-.213-.537V13.1q0-.325.213-.538.212-.212.537-.212h10q.325 0 .538.212.212.213.212.538v4.85q0 .325-.212.537-.213.213-.538.213Zm-5.9 0q-.325 0-.537-.213-.213-.212-.213-.537V13.1q0-.325.213-.538.212-.212.537-.212h3.7q.325 0 .538.212.212.213.212.538v4.85q0 .325-.212.537-.213.213-.538.213Z"/>
    </Icon>
  );
});

IconMaterialViewComfyW100Filled.displayName = 'AmauiIconMaterialViewComfyW100Filled';

export default IconMaterialViewComfyW100Filled;
