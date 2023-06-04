import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWifiGaleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWifiGaleW100'

      short_name='NestWifiGale'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.9 18.4-.25-.8h-.525q-.65 0-1.1-.475-.45-.475-.4-1.125L4.2 7q.05-.6.475-1T5.7 5.6h12.6q.6 0 1.025.4.425.4.475 1l.575 9q.05.65-.4 1.125t-1.1.475h-.525l-.25.8Zm-1.25-7.55h14.7l-.25-3.8q-.025-.325-.25-.538-.225-.212-.55-.212H5.7q-.325 0-.55.212-.225.213-.25.538Zm.475 6.05h13.75q.35 0 .588-.25.237-.25.212-.6l-.275-4.5H4.6l-.275 4.5q-.025.35.212.6.238.25.588.25Z"/>
    </Icon>
  );
});

IconMaterialNestWifiGaleW100.displayName = 'AmauiIconMaterialNestWifiGaleW100';

export default IconMaterialNestWifiGaleW100;
