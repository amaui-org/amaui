import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalLibraryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalLibraryFilled'

      short_name='LocalLibrary'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.85 21.525Q9.5 20.55 7.963 19.95q-1.538-.6-3.213-.825-.75-.1-1.25-.638Q3 17.95 3 17.25V10.2q0-.95.65-1.563.65-.612 1.525-.462Q7.1 8.5 8.838 9.35q1.737.85 3.162 2.2 1.425-1.35 3.163-2.2 1.737-.85 3.662-1.175.875-.15 1.525.462.65.613.65 1.563v7.05q0 .7-.5 1.237-.5.538-1.25.638-1.675.225-3.212.825-1.538.6-2.888 1.575-.5.375-1.15.375-.65 0-1.15-.375ZM12 9q-1.65 0-2.825-1.175Q8 6.65 8 5q0-1.65 1.175-2.825Q10.35 1 12 1q1.65 0 2.825 1.175Q16 3.35 16 5q0 1.65-1.175 2.825Q13.65 9 12 9Z"/>
    </Icon>
  );
});

IconMaterialLocalLibraryFilled.displayName = 'AmauiIconMaterialLocalLibraryFilled';

export default IconMaterialLocalLibraryFilled;
