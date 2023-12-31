import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVr180Create2d = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vr180Create2d'

      short_name='Vr180Create2d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-250q-107-27-173.5-113.5T80-560q0-134 93-227t227-93q110 0 196.5 66.5T710-640h-84q-26-72-87.5-116T400-800q-100 0-170 70t-70 170q0 77 44 138.5T320-334v84Zm80 170v-480h480v480H400Zm80-80h320v-320H480v320Zm20-40h280l-92-120-68 90-48-66-72 96Zm140-120ZM393-567Z"/>
    </Icon>
  );
});

IconMaterialVr180Create2d.displayName = 'AmauiIconMaterialVr180Create2d';

export default IconMaterialVr180Create2d;
