import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSlideshowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SlideshowW100'

      short_name='Slideshow'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.15 14.55 3.025-1.925q.175-.125.25-.275.075-.15.075-.35 0-.2-.075-.35-.075-.15-.25-.275L11.15 9.45q-.375-.25-.763-.038-.387.213-.387.663v3.85q0 .45.387.662.388.213.763-.037ZM5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm0-.7h12.4q.35 0 .575-.225Q19 18.55 19 18.2V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19ZM5 19V5v14Z"/>
    </Icon>
  );
});

IconMaterialSlideshowW100.displayName = 'AmauiIconMaterialSlideshowW100';

export default IconMaterialSlideshowW100;
