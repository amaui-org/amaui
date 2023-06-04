import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExposureW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExposureW100'

      short_name='Exposure'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.8 19.7q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425Zm.95-11.6h3.5q.15 0 .25-.1t.1-.25q0-.15-.1-.25t-.25-.1h-3.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM5.8 19h12.4q.3 0 .55-.25.25-.25.25-.55V5.8q0-.15-.062-.288-.063-.137-.188-.262l-13.5 13.5q.125.125.263.188Q5.65 19 5.8 19Zm9.45-1.4q-.15 0-.25-.1t-.1-.25V15.6h-1.65q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.65v-1.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v1.65h1.65q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1H15.6v1.65q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialExposureW100.displayName = 'AmauiIconMaterialExposureW100';

export default IconMaterialExposureW100;
