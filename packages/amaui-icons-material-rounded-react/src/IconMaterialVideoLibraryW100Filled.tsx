import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoLibraryW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryW100Filled'

      short_name='VideoLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.65 12.55 3.025-1.925q.35-.225.35-.625t-.35-.625L12.65 7.45q-.375-.25-.763-.038-.387.213-.387.663v3.85q0 .45.387.662.388.213.763-.037Zm-4.5 4.15q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm-2.7 2.7q-.65 0-1.075-.425-.425-.425-.425-1.075V7.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225H16.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryW100Filled.displayName = 'AmauiIconMaterialVideoLibraryW100Filled';

export default IconMaterialVideoLibraryW100Filled;
