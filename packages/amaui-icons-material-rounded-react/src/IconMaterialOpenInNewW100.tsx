import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialOpenInNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInNewW100'

      short_name='OpenInNew'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h4.85q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H5.8q-.3 0-.55.25Q5 5.5 5 5.8v12.4q0 .3.25.55.25.25.55.25h12.4q.3 0 .55-.25.25-.25.25-.55v-4.85q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4.85q0 .65-.425 1.075-.425.425-1.075.425Zm3.7-5.2q-.125-.125-.125-.25T9.5 14l9-9h-4.15q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h4.6q.325 0 .538.212.212.213.212.538v4.6q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25V5.5l-9.025 9.025q-.1.1-.225.1T9.5 14.5Z"/>
    </Icon>
  );
});

IconMaterialOpenInNewW100.displayName = 'AmauiIconMaterialOpenInNewW100';

export default IconMaterialOpenInNewW100;
