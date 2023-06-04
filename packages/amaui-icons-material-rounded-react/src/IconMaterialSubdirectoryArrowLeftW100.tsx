import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSubdirectoryArrowLeftW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubdirectoryArrowLeftW100'

      short_name='SubdirectoryArrowLeft'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.75 19.85-4.325-4.325q-.125-.125-.175-.25Q5.2 15.15 5.2 15q0-.15.05-.275.05-.125.175-.25l4.35-4.35q.1-.1.225-.1t.25.125q.125.125.125.25t-.125.25l-4 4h11.4V5q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v9.6q0 .325-.212.537-.213.213-.538.213H6.25l4.025 4.025q.1.1.1.225t-.125.25q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialSubdirectoryArrowLeftW100.displayName = 'AmauiIconMaterialSubdirectoryArrowLeftW100';

export default IconMaterialSubdirectoryArrowLeftW100;
