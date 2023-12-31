import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVr180Create2dFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vr180Create2dFilled'

      short_name='Vr180Create2d'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80v-480h480v480H400Zm100-120h280l-92-120-68 90-48-66-72 96Zm-180-50q-107-27-173.5-113.5T80-560q0-134 93-227t227-93q110 0 196.5 66.5T710-640H320v390Z"/>
    </Icon>
  );
});

IconMaterialVr180Create2dFilled.displayName = 'AmauiIconMaterialVr180Create2dFilled';

export default IconMaterialVr180Create2dFilled;
