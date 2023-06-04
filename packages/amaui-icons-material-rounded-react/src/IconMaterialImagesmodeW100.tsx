import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialImagesmodeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImagesmodeW100'

      short_name='Imagesmode'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 20.7q-.975 0-1.663-.688-.687-.687-.687-1.662V5.65q0-.975.687-1.663Q4.675 3.3 5.65 3.3h12.7q.975 0 1.663.687.687.688.687 1.663v12.7q0 .975-.687 1.662-.688.688-1.663.688Zm0-.7h12.7q.675 0 1.163-.488.487-.487.487-1.162V5.65q0-.675-.487-1.163Q19.025 4 18.35 4H5.65q-.675 0-1.162.487Q4 4.975 4 5.65v12.7q0 .675.488 1.162Q4.975 20 5.65 20Zm1.925-3.3L10 14.275l1.85 1.825L14 13.4l2.65 3.3ZM8.65 9.35q-.575 0-.962-.388Q7.3 8.575 7.3 8t.388-.963q.387-.387.962-.387t.963.387Q10 7.425 10 8t-.387.962q-.388.388-.963.388Z"/>
    </Icon>
  );
});

IconMaterialImagesmodeW100.displayName = 'AmauiIconMaterialImagesmodeW100';

export default IconMaterialImagesmodeW100;
