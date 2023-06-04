import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImageAspectRatioW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImageAspectRatioW100'

      short_name='ImageAspectRatio'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.25 12h1.5v-1.5h-1.5ZM10 12h1.5v-1.5H10Zm3.75 3.75h1.5v-1.5h-1.5Zm0-3.75h1.5v-1.5h-1.5ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V6.8q0-.65.425-1.075Q4.15 5.3 4.8 5.3h14.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h14.4q.3 0 .55-.25.25-.25.25-.55V6.8q0-.3-.25-.55Q19.5 6 19.2 6H4.8q-.3 0-.55.25Q4 6.5 4 6.8v10.4q0 .3.25.55.25.25.55.25ZM4 18V6 18Z"/>
    </Icon>
  );
});

IconMaterialImageAspectRatioW100.displayName = 'AmauiIconMaterialImageAspectRatioW100';

export default IconMaterialImageAspectRatioW100;
