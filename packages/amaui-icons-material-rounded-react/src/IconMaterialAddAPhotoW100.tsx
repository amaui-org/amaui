import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddAPhotoW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAPhotoW100'

      short_name='AddAPhoto'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.675 17.5q1.475 0 2.488-1.012 1.012-1.013 1.012-2.488t-1.012-2.488Q12.15 10.5 10.675 10.5t-2.487 1.012Q7.175 12.525 7.175 14t1.013 2.488Q9.2 17.5 10.675 17.5Zm-7.2 3.2q-.65 0-1.075-.425-.425-.425-.425-1.075V8.8q0-.65.425-1.075.425-.425 1.075-.425h2.9l1.4-1.525q.2-.225.488-.35.287-.125.612-.125h4.7q.325 0 .538.212.212.213.212.538V8l-10.85.8H2.675v10.4q0 .35.225.575.225.225.575.225h14.4q.35 0 .575-.225.225-.225.225-.575v-8.85h-.05q-.5 0-.437.075.062.075.325.188.262.112.562.25.3.137.3.237v8.1q0 .65-.425 1.075-.425.425-1.075.425ZM18.7 6h-1.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65V3.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H19.4v1.65q0 .15-.1.25t-.25.1q-.15 0-.25-.1t-.1-.25ZM2.675 8.8V20 8.8Z"/>
    </Icon>
  );
});

IconMaterialAddAPhotoW100.displayName = 'AmauiIconMaterialAddAPhotoW100';

export default IconMaterialAddAPhotoW100;
