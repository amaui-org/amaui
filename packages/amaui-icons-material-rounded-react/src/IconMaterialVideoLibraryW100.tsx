import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoLibraryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoLibraryW100'

      short_name='VideoLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.65 12.55 3.025-1.925q.35-.225.35-.625t-.35-.625L12.65 7.45q-.375-.25-.763-.038-.387.213-.387.663v3.85q0 .45.387.662.388.213.763-.037Zm-4.5 4.15q-.65 0-1.075-.425-.425-.425-.425-1.075V4.8q0-.65.425-1.075Q7.5 3.3 8.15 3.3h10.4q.65 0 1.075.425.425.425.425 1.075v10.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h10.4q.35 0 .575-.225.225-.225.225-.575V4.8q0-.35-.225-.575Q18.9 4 18.55 4H8.15q-.35 0-.575.225-.225.225-.225.575v10.4q0 .35.225.575Q7.8 16 8.15 16Zm-2.7 3.4q-.65 0-1.075-.425-.425-.425-.425-1.075V7.15q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V17.9q0 .35.225.575.225.225.575.225H16.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM7.35 4v12V4Z"/>
    </Icon>
  );
});

IconMaterialVideoLibraryW100.displayName = 'AmauiIconMaterialVideoLibraryW100';

export default IconMaterialVideoLibraryW100;
