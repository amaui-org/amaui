import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeskphone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Deskphone'

      short_name='Deskphone'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M680 856h80V296h-80v560ZM240 656h80v-80h-80v80Zm0 120h80v-80h-80v80Zm0-240h320V376H240v160Zm120 120h80v-80h-80v80Zm0 120h80v-80h-80v80Zm120-120h80v-80h-80v80Zm0 120h80v-80h-80v80Zm120 40V336H200v480h400Zm-480 80V256h480v-40h240v720H600v-40H120Zm80-80V336v480Z"/>
    </Icon>
  );
});

IconMaterialDeskphone.displayName = 'AmauiIconMaterialDeskphone';

export default IconMaterialDeskphone;
