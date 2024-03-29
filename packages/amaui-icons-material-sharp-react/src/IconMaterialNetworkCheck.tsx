import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkCheck'

      short_name='NetworkCheck'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2.1 11.1 0 9q2.3-2.35 5.375-3.675Q8.45 4 12 4q.6 0 1.2.037.6.038 1.2.113l-1.5 2.9Q12.6 7 12.413 7H12Q9.1 7 6.562 8.087 4.025 9.175 2.1 11.1Zm4.25 4.25-2.1-2.15q1.4-1.4 3.213-2.213 1.812-.812 3.937-.937L9.8 13.3q-.975.3-1.85.813-.875.512-1.6 1.237Zm4.95 4.5q-.75-.275-1.162-1.038-.413-.762-.038-1.512l6-12.2q.1-.2.287-.263.188-.062.413.013.2.075.3.25.1.175.05.4L13.9 18.65q-.2.825-1 1.162-.8.338-1.6.038Zm6.35-4.5q-.15-.15-.325-.3-.175-.15-.375-.3l.8-3.15q.525.375 1.038.763.512.387.962.837Zm4.25-4.25q-.75-.75-1.612-1.375Q19.425 9.1 18.45 8.6l.7-3q1.35.65 2.575 1.5T24 9Z"/>
    </Icon>
  );
});

IconMaterialNetworkCheck.displayName = 'AmauiIconMaterialNetworkCheck';

export default IconMaterialNetworkCheck;
