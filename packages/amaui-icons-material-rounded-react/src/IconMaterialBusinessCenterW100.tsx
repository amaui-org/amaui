import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBusinessCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterW100'

      short_name='BusinessCenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.3 7.3V6.1q0-.65.425-1.075Q10.15 4.6 10.8 4.6h2.4q.65 0 1.075.425.425.425.425 1.075v1.2h4.5q.65 0 1.075.425.425.425.425 1.075v9.4q0 .65-.425 1.075-.425.425-1.075.425H4.8q-.65 0-1.075-.425Q3.3 18.85 3.3 18.2V8.8q0-.65.425-1.075Q4.15 7.3 4.8 7.3Zm.7 0h4V6.1q0-.3-.25-.55-.25-.25-.55-.25h-2.4q-.3 0-.55.25-.25.25-.25.55Zm10 7.05h-6.3v.6q0 .325-.212.538-.213.212-.538.212h-1.9q-.325 0-.537-.212-.213-.213-.213-.538v-.6H4v3.85q0 .3.25.55.25.25.55.25h14.4q.3 0 .55-.25.25-.25.25-.55ZM11 15h2v-2h-2Zm-7-1.35h6.3v-.6q0-.325.213-.538.212-.212.537-.212h1.9q.325 0 .538.212.212.213.212.538v.6H20V8.8q0-.3-.25-.55Q19.5 8 19.2 8H4.8q-.3 0-.55.25Q4 8.5 4 8.8Zm8 .35Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterW100.displayName = 'AmauiIconMaterialBusinessCenterW100';

export default IconMaterialBusinessCenterW100;
