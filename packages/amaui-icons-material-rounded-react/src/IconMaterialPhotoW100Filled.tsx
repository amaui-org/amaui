import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPhotoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoW100Filled'

      short_name='Photo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.75 16.35h6.7q.275 0 .375-.225.1-.225-.05-.425L14 13.35q-.125-.15-.312-.15-.188 0-.313.15l-2.175 2.7-1.275-1.475q-.125-.15-.312-.15-.188 0-.313.175l-.85 1.1q-.15.2-.05.425.1.225.35.225ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialPhotoW100Filled.displayName = 'AmauiIconMaterialPhotoW100Filled';

export default IconMaterialPhotoW100Filled;
