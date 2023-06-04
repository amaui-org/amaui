import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialArrowBackW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ArrowBackW100'

      short_name='ArrowBack'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.45 18.75-6.225-6.225q-.125-.125-.175-.25Q5 12.15 5 12q0-.15.05-.275.05-.125.175-.25l6.25-6.25q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-5.9 5.9h12.3q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H6.05l5.925 5.925q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialArrowBackW100.displayName = 'AmauiIconMaterialArrowBackW100';

export default IconMaterialArrowBackW100;
