import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLibraryMusic = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LibraryMusic'

      short_name='LibraryMusic'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12.5 15q1.05 0 1.775-.725Q15 13.55 15 12.5V7h3V5h-4v5.5q-.325-.25-.7-.375-.375-.125-.8-.125-1.05 0-1.775.725Q10 11.45 10 12.5q0 1.05.725 1.775Q11.45 15 12.5 15ZM6 2h16v16H6Zm2 14h12V4H8Zm-6 6V6h2v14h14v2ZM8 4v12Z"/>
    </Icon>
  );
});

IconMaterialLibraryMusic.displayName = 'AmauiIconMaterialLibraryMusic';

export default IconMaterialLibraryMusic;
